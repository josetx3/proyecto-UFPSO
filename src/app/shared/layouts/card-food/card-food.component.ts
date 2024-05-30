import {Component, OnInit} from '@angular/core';
import {FoodService} from "@app/modules/user/services/food.service";
import {AlertService} from "@app/core/services/alert.service";

@Component({
  selector: 'app-card-food',
  templateUrl: './card-food.component.html',
  styleUrls: ['./card-food.component.scss']
})
export class CardFoodComponent implements OnInit {

  Food: any[] = []

  constructor(
    private _food: FoodService,
    private _alert: AlertService,
  ) {
  }

  ngOnInit() {
    this.getAllFoods();
  }

  getAllFoods() {
    this._food.getFoodSale().subscribe({
      next: (data) => {
        this.Food = data;
      }, error: (error) =>{

      }
    })
  }

}
