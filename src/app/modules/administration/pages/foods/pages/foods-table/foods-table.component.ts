import {Component, OnInit} from '@angular/core';
import {TableActions, TableColumn} from "@app/core/interfaces/table.interface";
import {AlertService} from "@app/core/services/alert.service";
import {DatePipe} from "@angular/common";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoadingService} from "@app/core/services/loading.service";
import {RegisterFood} from "@app/modules/administration/interfaces/food.interface";
import {FoodService} from "@app/modules/administration/pages/foods/services/food.service";
import {HttpParams} from "@angular/common/http";
import {ImageService} from "@app/core/services/image.service";
import {Select} from "@app/core/interfaces/select.interface";
import {SelectService} from "@app/core/services/select.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-foods-table',
  templateUrl: './foods-table.component.html',
  styleUrls: ['./foods-table.component.scss'],
  providers: [DatePipe]
})
export class FoodsTableComponent implements OnInit {

  public formFood: FormGroup = new FormGroup<any>({});


  /**
   * ESTILOS DE LA TABLA
   */
  columnsTable: TableColumn[] = [
    {name: 'Nombre', isFilterable: true, key: 'food_name', type: 'text'},
    {name: 'Stock', isFilterable: true, key: 'food_stock', type: 'text'},
    {name: 'Precio', isFilterable: true, key: 'food_price', type: 'text'},
    {name: 'Estado', isFilterable: true, key: 'food_status', type: 'status'},
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

  showRegisterFood: boolean = false;
  menuEditFood: boolean = false;

  title: string = 'Nueva comida';
  image: string = './assets/img/profile-user.png';

  dataTypeFood: Select[] = [];
  typeFoodId: string = '';
  dataVariantFood: Select[] = [];


  size: number = 0;
  pageIndex: number = 0;
  totalElements: number = 0;
  hasRoles: boolean = false;
  isPageable: boolean = false;
  dataTable: any[] = [];

  fileNameProduct: string[] = [];
  fileImageProduct: string[] = [];

  constructor(
    private router: Router,
    private _food: FoodService,
    private _image: ImageService,
    private _alert: AlertService,
    private _select: SelectService,
    private _loader: LoadingService,
  ) {
  }

  ngOnInit(): void {
    this.getFoodTable(new HttpParams());
  }

  getTypeFood(): void {
    this._select.getTypeFood().subscribe({
      next: (data: Select[]) => {
        this.dataTypeFood = data;
      }
    })
  }

  uploadImages(event: any): void {
    const capturedFile = event.target.files[0];
    const supportedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];
    const fileType = capturedFile.type;
    if (supportedTypes.includes(fileType)) {
      const fileName = capturedFile.name;
      this.fileNameProduct.push(fileName);
      this._image.compressImage(capturedFile, 0.10).then(
        compressedResult => {
          this.fileImageProduct.push(compressedResult);
          this._alert.success('Imagen subida correctamente');
        }
      )
    } else {
      this._alert.warning('Solo se admiten archivos PNG, JPEG, JPG o WEBP.');
    }
  };

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
    this._loader.show();
    this._food.getFoodTable(params).subscribe({
      next: (data) => {
        this.dataTable = data.content;
        this._loader.hide();
      }, error: (e): void => {
        this._loader.hide();
        this._alert.warning('Tenemos problemas, reintenta mas tarde.')
      }
    })
  }

  edit(data: any): void {
    this._food.setFoodId(data.food_id)
    this.router.navigateByUrl('administration/food/' + data.movie_id).then();
  }

  unlockFood(user: any): void {
  }

  createFood(): void {
    this.showRegisterFood = !this.showRegisterFood;
    this.formFood.reset();
    this.initFormFood();
    this.getTypeFood();
  }

  sendFormRegisterFood(): void {
    //   Falta el if para el formulario
    this._loader.show();
    const dataRegisterFood: RegisterFood = {
      food_name: this.formFood.get('food_name')?.value,
      food_description: this.formFood.get('food_description')?.value,
      food_price: this.formFood.get('food_price')?.value,
      food_stock: this.formFood.get('food_stock')?.value,
      food_image: this.fileImageProduct[0],
      variant_type_food_id: this.formFood.get('variant_type_food_id')?.value,
    }
    this._food.registerFood(dataRegisterFood).subscribe({
      next: () => {
        this.showRegisterFood = !this.showRegisterFood;
        this.formFood.reset();
        this.fileImageProduct = [];
        this.getFoodTable(new HttpParams())
        this._loader.hide();
        this._alert.success('Comida registrada con exito');
      },
      error: (error): void => {
        console.error(error.error.message);
        this._alert.error('Parece que hubo problemas el registar esta comida, intentalo de nuevo');
        this._loader.hide();
      }
    })
  }

  changeTypeFood(_event: any): void {
    this._select.getVariantFood(_event.value).subscribe({
      next: (data: Select[]) => {
        this.dataVariantFood = data;
      }
    })
  }


}
