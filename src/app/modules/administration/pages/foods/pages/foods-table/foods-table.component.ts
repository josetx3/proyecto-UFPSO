import {Component} from '@angular/core';
import {TableActions, TableColumn} from "@app/core/interfaces/table.interface";
import {AlertService} from "@app/core/services/alert.service";
import {DatePipe} from "@angular/common";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoadingService} from "@app/core/services/loading.service";
import {RegisterFood} from "@app/modules/administration/interfaces/food.interface";
import {FoodService} from "@app/modules/administration/pages/foods/services/food.service";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-foods-table',
  templateUrl: './foods-table.component.html',
  styleUrls: ['./foods-table.component.scss'],
  providers: [DatePipe]
})
export class FoodsTableComponent {

  public formFood: FormGroup = new FormGroup<any>({});

  foods: any[] = [
    {
      food_id: '1',
      food_name: 'Palomitas',
      food_reference: 'P001S',
      food_stock: 100,
      food_price: 5000,
      food_status: 'Activo',
      food_Categoria: 'Confiteria',
      food_selling: 20,
    },
    {
      food_id: '2',
      food_name: 'Hamburguea doble carne',
      food_reference: 'H001A',
      food_stock: 20,
      food_price: 12000,
      food_status: 'Activo',
      food_Categoria: 'Comida rapida',
      food_selling: 34,
    },
    {
      food_id: '3',
      food_name: 'Perro caliente',
      food_reference: 'P001A',
      food_stock: 50,
      food_price: 9000,
      food_status: 'Inactivo',
      food_category: 'Comida rapida',
      food_selling: 45,
    },
  ]

  showRegisterFood: boolean = false;
  menuEditFood: boolean = false;
  title: string = 'Nueva comida';
  image: string = './assets/img/profile-user.png';

  columnsTable: TableColumn[] = [
    {name: 'Nombre', isFilterable: true, key: 'food_name', type: 'text'},
    {name: 'Referencia', isFilterable: true, key: 'food_reference', type: 'text'},
    {name: 'Stock', isFilterable: true, key: 'food_stock', type: 'text'},
    {name: 'Precio', isFilterable: true, key: 'food_price', type: 'text'},
    {name: 'Vendidos', isFilterable: true, key: 'food_selling', type: 'text'},
    {name: 'Categoria', isFilterable: true, key: 'food_category', type: 'text'},
    {name: 'Estado', isFilterable: true, key: 'food_status', type: 'statusName'},
  ];

  tableActions: TableActions = {
    add: true,
    search: false,
    unlock: true,
    edit: {
      can: true
    },
    delete: {
      can: false
    },
    view: {
      can: false
    }
  }

  size: number = 0;
  pageIndex: number = 0;
  totalElements: number = 0;
  hasRoles: boolean = false;
  isPageable: boolean = false;
  // dataTable: UserAuth[] = [];
  dataTable: any[] = [];

  constructor(
    private _alert: AlertService,
    private _loader: LoadingService,
    private _food: FoodService
  ) {
  }

  ngOnInit(): void {
    this.getFoodTable(new HttpParams());
  }

  initFormFood(): void {
    this.formFood = new FormGroup({
      food_name: new FormControl('', [Validators.required]),
      food_description: new FormControl('', [Validators.required]),
      food_price: new FormControl('', [Validators.required]),
      food_stock: new FormControl('', [Validators.required]),
      food_image: new FormControl('', [Validators.required]),
      variant_type_food_id: new FormControl('', [Validators.required]),
    })
  }

  getFoodTable(params: HttpParams): void {
    this.dataTable = this.foods;
  }

  edit(data: any): void {

  }

  unlockFood(user: any): void {
  }

  createFood(): void {
    this.showRegisterFood = !this.showRegisterFood;
    this.formFood.reset();
    this.initFormFood();
  }

  sendFormRegisterFood(): void {
    //   Falta el if para el formulario
    this._loader.show();
    const dataRegisterFood: RegisterFood = {
      food_name: this.formFood.get('food_name')?.value,
      food_description: this.formFood.get('food_description')?.value,
      food_price: this.formFood.get('food_price')?.value,
      food_stock: this.formFood.get('food_stock')?.value,
      food_image: this.formFood.get('food_image')?.value,
      variant_type_food_id: this.formFood.get('variant_type_food_id')?.value,
    }
    this._food.registerFood(dataRegisterFood).subscribe({
      next: () => {
        this._loader.hide();
        this.showRegisterFood = !this.showRegisterFood;
        this.formFood.reset();
        this._alert.success('Comidax registrada con exito');
        this.getFoodTable(new HttpParams())
      }
    })
  }


}
