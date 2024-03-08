import {Component} from '@angular/core';
import {Food, Movie} from "@app/modules/user/interfaces/home.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  trailer: string = 'assets/img/kunfu-panda.jpg';

  Foods: Food[] = [
    {
      food_id: 1,
      food_img: 'assets/img/food/palomitas.png',
      food_name: 'Palomitas pequeñas',
      food_price: 12800,
      food_offer: 0,
      food_additional: 'Con mantequilla',
      food_status: 'activo',
    },
    {
      food_id: 2,
      food_img: 'assets/img/food/palomitas.png',
      food_name: 'Palomitas grandes',
      food_price: 8500,
      food_offer: 0,
      food_additional: 'Con mantequilla',
      food_status: 'activo',
    },
    {
      food_id: 3,
      food_img: 'assets/img/food/palomitas.png',
      food_name: 'Palomitas pequeñas',
      food_price: 6500,
      food_offer: 0,
      food_additional: 'naturales',
      food_status: 'activo',
    },
    {
      food_id: 4,
      food_img: 'assets/img/food/palomitas.png',
      food_name: 'Perro caliente',
      food_price: 12000,
      food_offer: 0,
      food_additional: 'sencillo',
      food_status: 'inactivo',
    }
  ];
}
