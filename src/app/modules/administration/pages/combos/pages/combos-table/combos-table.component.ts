import {Component, OnInit} from '@angular/core';
import {TableActions, TableColumn} from "@app/core/interfaces/table.interface";
import {AlertService} from "@app/core/services/alert.service";
import {DatePipe} from "@angular/common";
import {HttpParams} from "@angular/common/http";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ImageService} from "@app/core/services/image.service";
import {LoadingService} from "@app/core/services/loading.service";
import {RegisterCombo} from "@app/modules/administration/pages/combos/interfaces/combo.interface";
import {ComboService} from "@app/modules/administration/pages/combos/services/combo.service";
import {format} from "crypto-js";
import {Select} from "@app/core/interfaces/select.interface";
import {SelectService} from "@app/core/services/select.service";

@Component({
  selector: 'app-combos-table',
  templateUrl: './combos-table.component.html',
  styleUrls: ['./combos-table.component.scss'],
  providers: [DatePipe]
})
export class CombosTableComponent implements OnInit {

  public formCombo: FormGroup = new FormGroup<any>({});

  foodCombo: any[] = [
    {
      combo_id: '1',
      combo_reference: 'CO000231A',
      combo_stock: 120,
      combo_date_start: '20-04-2024',
      combo_date_find: '12-05-2024',
      combo_price: 12000,
      combo_sell: 50,
      combo_status: 'Activo'
    },
    {
      combo_id: '2',
      combo_reference: 'CO00451B',
      combo_stock: 90,
      combo_date_start: '22-04-2024',
      combo_date_find: '05-05-2024',
      combo_price: 19000,
      combo_sell: 12,
      combo_status: 'Inactivo'
    }
  ]

  menuEditCombo: boolean = false;
  showRegisterCombo: boolean = false;
  title: string = 'Nuevo combo';
  image: string = './assets/img/profile-user.png';

  fileImageProduct: string = '';
  fileNameProduct: string = '';

  columnsTable: TableColumn[] = [
    {name: 'Nombre combo', isFilterable: true, key: 'combo_name', type: 'text'},
    {name: 'Precio', isFilterable: true, key: 'combo_price', type: 'text'},
    {name: 'Stock', isFilterable: true, key: 'combo_stock', type: 'number'},
    {name: 'Estado', key: 'combo_status', type: 'status'},
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

  arrayFood: string[] = [];
  dataFood: Select[] = [];


  constructor(
    private _alert: AlertService,
    private _image: ImageService,
    private _loader: LoadingService,
    private _combo: ComboService,
    private _select: SelectService,
  ) {
  }

  ngOnInit(): void {
    this.getComboTable(new HttpParams());
  }

  returnTable(): void {
    this.showRegisterCombo = !this.showRegisterCombo;
    this.formCombo.reset();
    this.fileImageProduct = '';
    this.fileNameProduct = '';
  }

  initFormCombo(): void {
    this.formCombo = new FormGroup({
      combo_name: new FormControl('', [Validators.required]),
      combo_description: new FormControl('', [Validators.required]),
      combo_price: new FormControl('', [Validators.required]),
      combo_stock: new FormControl('', [Validators.required]),
      combo_image: new FormControl('', [Validators.required]),
      food_ids: new FormControl('', [Validators.required]),
    })
  }

  uploadImage(event: any): void {
    const capturedFile = event.target.files[0];
    const supportedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];
    const fileType = capturedFile.type;

    if (supportedTypes.includes(fileType)) {
      const fileName = capturedFile.name;
      this._image.compressImage(capturedFile, 0.10).then(compressedResult => {
        this.fileImageProduct = compressedResult;
        this.fileNameProduct = fileName;
        this._alert.success('Imagen subida correctamente');
      });
    } else {
      this._alert.warning('Solo se admiten archivos PNG, JPEG, JPG o WEBP.');
    }
  }

  changeFood(_event: Select): void {
    const validators = [Validators.required];
    const foodSelect = this.formCombo?.get('food_ids')?.value;
    this.arrayFood.push(foodSelect);
    const lastFood = this.arrayFood[this.arrayFood.length - 1];
  }

  getFoodSelect(): void {
    this._select.getFood().subscribe({
      next: (data) => {
        this.dataFood = data;
      }, error: (e): void => {
        this._alert.warning('Tenemos problemas al obtener las comidas, reintenta mas tarde')
      }
    })
  }

  createCombo(): void {
    this.showRegisterCombo = !this.showRegisterCombo;
    this.initFormCombo();
    this.getFoodSelect();
    this.formCombo.reset();
  }

  edit(data: any): void {

  }

  unlockCombo(combo: any): void {
  }

  editCombo(valor: boolean): void {
    this.menuEditCombo = valor;
    this.getComboTable(new HttpParams());
  }

  getComboTable(params: HttpParams): void {
    this._loader.show();
    this._combo.getComboTable(params).subscribe({
      next: (data) => {
        this.dataTable = data.content;
        this._loader.hide()
      }, error: (e): void => {
        this._loader.hide();
        this._alert.warning('Tenemos problemas, reintenta mas tarde.')
      }
    })
  }

  sendRegisterCombo(): void {
    this._loader.show();
    const dataRegisterCombo: RegisterCombo = {
      combo_name: this.formCombo.get('combo_name')?.value,
      combo_description: this.formCombo.get('combo_description')?.value,
      combo_price: this.formCombo.get('combo_price')?.value,
      combo_stock: this.formCombo.get('combo_stock')?.value,
      combo_image: this.fileImageProduct,
      food_ids: this.formCombo.get('food_ids')?.value
    }
    console.table(dataRegisterCombo);
    this._combo.registerCombo(dataRegisterCombo).subscribe({
      next: () => {
        this.showRegisterCombo = !this.showRegisterCombo;
        this.formCombo.reset();
        this.fileImageProduct = '';
        this.fileNameProduct = '';
        this.getComboTable(new HttpParams());
        this._loader.hide();
        this._alert.success('Combo registando correctamente');
      }, error: (error): void => {
        console.error(error.error.message);
        this._alert.error('Parece que hubo problemas el registar el combo');
        this._loader.hide();
      }
    })
  }

}
