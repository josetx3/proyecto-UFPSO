import {Component, OnInit, OnChanges, OnDestroy} from '@angular/core';
import {Chairs, Foods} from "@app/modules/user/interfaces/purchase.interface";
import {Subscription} from "rxjs";
import {PurchaseService} from "@app/modules/user/services/purchase.service";
import {MovieScheduleService} from "@app/modules/administration/pages/movie-schedule/services/movie-schedule.service";
import {CheckoutService} from "@app/modules/user/services/checkout.service";
import {LoadingService} from "@app/core/services/loading.service";
import {AlertService} from "@app/core/services/alert.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy {

  selectedChairs: Chairs[] = [];
  chairsId: string[] = [];

  selectedFoods: Foods[] = [];
  food_id: string[] = [];
  food_quantity: number[] = [];
  totalFoodPrice: number = 0;
  sendFoodCheckout: any[] = [];

  schedulePrice: number | null = 0;
  scheduleMovieId: string | null = '';

  redirectToPayment: string = '';

  private subscription: Subscription = new Subscription();
  private dataFoods: Subscription = new Subscription();

  constructor(
    private _purchase: PurchaseService,
    private _schedule: MovieScheduleService,
    private _checkout: CheckoutService,
    private _loader: LoadingService,
    private _alert: AlertService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    //OBTENER EL PRECIO DE LAS SILLAS
    this._schedule._schedulePrice.subscribe({
      next: (price) => {
        this.schedulePrice = price;
      }
    });
    //OBTENER EL SCHEDULE ID DE LA PELICULA
    this._schedule._scheduleId.subscribe({
      next: (schedule_id) => {
        this.scheduleMovieId = schedule_id
      }
    });

    if (this.scheduleMovieId != "") {
      this.subscription = this._purchase.selectedChairs$.subscribe(chairs => {
        this.selectedChairs = chairs;
        this.chairsId = this.selectedChairs.map(chair => chair.place_to_sit_id);
      });

      this.dataFoods = this._purchase.selectedFoods$.subscribe(foods => {
        this.selectedFoods = foods;
        this.calculateTotalFoodPrice();
      })
    } else {
      this.router.navigateByUrl('/').then();
    }
  }

  calculateTotalFoodPrice() {
    this.totalFoodPrice = 0;
    this.selectedFoods.forEach(food => {
      this.totalFoodPrice += food.food_price * food.food_quantity;
      this.createSendFoodCheckout();
    });
  }

  createSendFoodCheckout() {
    this.sendFoodCheckout = this.selectedFoods.map(food => ({
      checkout_food_id: food.food_id,
      checkout_quantity_food: food.food_quantity
    }));
  }

  get totalCheckout(): any {
    if (this.schedulePrice != null) {
      return (this.schedulePrice * this.selectedChairs.length) + this.totalFoodPrice;
    } else {
      return null;
    }
  }

  //  VALIDAR ESTA PARTE PARA QUE CUAND NO SE PAGUE NO COLOQUE LAS SILLAS EN OCUPADO
  openOrderSummary(): void {
    this._loader.show();
    const sendCheckout = {
      checkout_total: this.totalCheckout,
      checkout_movie_schedule_id: this.scheduleMovieId,
      checkout_video_place_to_sits: this.chairsId,
      checkout_foods: this.sendFoodCheckout,
      checkout_combos: [],
    }
    console.log('=============================')
    console.log(sendCheckout)
    console.log('=============================')
    this._checkout.sendCheckout(sendCheckout).subscribe({
      next: (data) => {
        this._loader.hide();
        this.redirectToPayment = data.link
        window.location.href = this.redirectToPayment;
      }, error: (error) => {
        this._alert.error('Tenemos problemas ' + error.error.message);
        this._loader.hide();
      }
    })
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.schedulePrice = 0;
  }

}
