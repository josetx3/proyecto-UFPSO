import {Component} from '@angular/core';
import {TableActions, TableColumn} from "@app/core/interfaces/table.interface";
import {AlertService} from "@app/core/services/alert.service";
import {DatePipe} from "@angular/common";
import {HttpParams} from "@angular/common/http";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-combos-table',
  templateUrl: './combos-table.component.html',
  styleUrls: ['./combos-table.component.scss'],
  providers: [DatePipe]
})
export class CombosTableComponent {

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

  columnsTable: TableColumn[] = [
    {name: 'Referencia', isFilterable: true, key: 'combo_reference', type: 'text'},
    {name: 'Stock', isFilterable: true, key: 'combo_stock', type: 'number'},
    {name: 'Fecha inicio', isFilterable: true, key: 'combo_date_start', type: 'text'},
    {name: 'Fecha fin', isFilterable: true, key: 'combo_date_find', type: 'text'},
    {name: 'Precio', isFilterable: true, key: 'combo_price', type: 'text'},
    {name: 'Vendidos', isFilterable: true, key: 'combo_sell', type: 'text'},
    {name: 'Estado', key: 'combo_status', type: 'statusName'},
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
    private _alert: AlertService
  ) {
  }

  ngOnInit(): void {
    this.getComboTable(new HttpParams());
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

  createCombo(): void {
    this.showRegisterCombo = !this.showRegisterCombo;

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
    this.dataTable = this.foodCombo;
  }

}
