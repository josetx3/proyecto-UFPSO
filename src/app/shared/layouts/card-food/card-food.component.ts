import {Component} from '@angular/core';

@Component({
  selector: 'app-card-food',
  templateUrl: './card-food.component.html',
  styleUrls: ['./card-food.component.scss']
})
export class CardFoodComponent {

  Food: any[] = [
    {
      food_id: 1,
      food_restaurant: 'Ruca',
      food_name: 'Palomitas pequeñas',
      food_flavor: 'Mantequilla',
      food_discount: 0,
      food_price: 5000,
      food_img: 'assets/img/food/palomitas.png'
    },
    {
      food_id: 2,
      food_restaurant: 'Ruca',
      food_name: 'Hamburguesa clasica',
      food_flavor: 'Sencilla',
      food_price: 10000,
      food_discount: 0,
      food_img: 'assets/img/food/hamburguesa.jpg'
    },
  ]

}
