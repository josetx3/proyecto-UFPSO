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
      food_restaurant: 'Cine',
      food_name: 'Palomitas pequeñas',
      food_flavor: 'Mantequilla',
      food_cant: 2,
      food_discount: 0,
      food_price: 5000,
      food_img: 'assets/img/food/palomitas.png'
    },
    {
      food_id: 2,
      food_restaurant: 'Ruca',
      food_name: 'Hamburguesa clasica',
      food_flavor: 'Sencilla',
      food_cant: 3,
      food_discount: 0,
      food_price: 10000,
      food_img: 'assets/img/food/hamburguesa.jpg'
    },
    {
      food_id: 3,
      food_restaurant: 'La provincia',
      food_name: 'Pastas carbonara',
      food_flavor: 'carbonara',
      food_cant: 5,
      food_discount: 0,
      food_price: 12000,
      food_img: 'assets/img/food/pastas.jpg'
    },
    {
      food_id: 4,
      food_restaurant: 'Pizza-Juan-XXIII',
      food_name: 'Pizza personal',
      food_flavor: 'americana',
      food_cant: 2,
      food_price: 6000,
      food_discount: 0,
      food_img: 'assets/img/food/pizza.jpg'
    },
    {
      food_id: 5,
      food_restaurant: 'Pascual',
      food_name: 'Pincho mixto',
      food_flavor: 'normal',
      food_cant: 6,
      food_price: 14000,
      food_discount: 0,
      food_img: 'assets/img/food/pinchos.jpg'
    },
  ]

}
