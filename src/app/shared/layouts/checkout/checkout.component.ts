import {Component, OnInit, OnChanges} from '@angular/core';
import {Chairs} from "@app/modules/user/interfaces/purchase.interface";
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
export class CheckoutComponent implements OnInit {

  selectedChairs: Chairs[] = [];
  chairsId: string[] = [];

  schedulePrice: number = 0;
  scheduleMovieId: string = '';

  private subscription: Subscription = new Subscription();

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
    this.schedulePrice = this._schedule.getPriceMovieSchedule();
    this.scheduleMovieId = this._schedule.getScheduleId();
    if (this.scheduleMovieId != "") {
      this.subscription = this._purchase.selectedChairs$.subscribe(chairs => {
        this.selectedChairs = chairs;
        this.chairsId = this.selectedChairs.map(chair => chair.place_to_sit_id);
      });
    } else {
      this.router.navigateByUrl('/').then();
    }
  }

  get totalCheckout(): number {
    return this.schedulePrice * this.selectedChairs.length;
  }

  sendCheckout(): void {
    this._loader.show();
    const sendCheckout = {
      checkout_total: this.totalCheckout,
      checkout_movie_schedule_id: this.scheduleMovieId,
      checkout_video_place_to_sits: this.chairsId,
      checkout_foods: [],
      checkout_combos: [],
    }
    this._checkout.sendCheckout(sendCheckout).subscribe({
      next: () => {
        this._loader.hide();
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
