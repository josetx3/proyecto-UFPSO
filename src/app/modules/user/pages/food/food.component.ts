import {Component} from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent {

  selectedPlates: any[] = [];

  restaurants = [
    {
      name_restaurant: 'Ruca',
      dishes: [
        {
          id: 1,
          name: 'Palomitas naturales',
          price: 8000,
          img: 'assets/img/food/palomitas.png'
        },
        {
          id: 2,
          name: 'Pastas napolitanas',
          price: 23000,
          img: 'assets/img/food/pastas.jpg'
        },
        {
          id: 3,
          name: 'Pizza napolitana',
          price: 7500,
          img: 'assets/img/food/pizza.jpg'
        },
        {
          id: 4,
          name: 'Ensalada de pepino y huevo',
          price: 12000,
          img: 'assets/img/food/Ensalada.jpg'
        },
        {
          id: 5,
          name: 'Hamburguesa clasica',
          price: 21000,
          img: 'assets/img/food/hamburguesa.jpg'
        },
        {
          id: 6,
          name: 'Wafles caseros',
          price: 11000,
          img: 'assets/img/food/wafles.jpg'
        },
        {
          id: 7,
          name: 'Pincho mixto',
          price: 14000,
          img: 'assets/img/food/pinchos.jpg'
        },
        {
          id: 8,
          name: 'Palomitas naturales',
          price: 5000,
          img: 'assets/img/food/palomitas.png'
        }
      ]
    },
    {
      name_restaurant: 'Mr.Rico',
      dishes: [
        {
          id: 70,
          name: 'Hamburguesa clasica',
          price: 16000,
          img: 'assets/img/food/hamburguesa.jpg'
        }
      ]
    }
  ]


  addToCart(restaurantName: string, plate: any) {
    this.selectedPlates.push({restaurant: restaurantName, plate: plate});
  }


}
