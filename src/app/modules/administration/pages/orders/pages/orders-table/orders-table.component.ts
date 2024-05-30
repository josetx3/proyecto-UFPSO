import {Component, OnInit} from '@angular/core';
import {TableActions, TableColumn} from "@app/core/interfaces/table.interface";
import {AlertService} from "@app/core/services/alert.service";
import {DatePipe} from "@angular/common";
import {CheckoutService} from "@app/modules/user/services/checkout.service";
import {LoadingService} from "@app/core/services/loading.service";

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss'],
  providers: [DatePipe]
})
export class OrdersTableComponent implements OnInit {

  title: string = 'Nueva pelicula';
  image: string = './assets/img/profile-user.png';

  columnsTable: TableColumn[] = [
    {name: 'Referencia de pago', isFilterable: true, key: 'checkout_reference', type: 'text'},
    {name: 'Fecha de pago', isFilterable: true, key: 'checkout_create_date', type: 'text'},
    {name: 'Valor', isFilterable: true, key: 'checkout_price', type: 'number'},
    {name: 'Estado', isFilterable: true, key: 'checkout_status', type: 'statusName'},
    {name: 'Comprador', isFilterable: true, key: 'user_name', type: 'text'},
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
  isPageable: boolean = false;
  dataTable: any[] = [];

  constructor(
    private _alert: AlertService,
    private _loader: LoadingService,
    private _checkout: CheckoutService,
  ) {
    _loader.show();
  }

  ngOnInit(): void {
    this.getOrderTable();
  }


  getOrderTable(): void {
    this._checkout.getCheckoutOrders().subscribe({
      next: (data_checkout) => {
        console.log(data_checkout);
        this.dataTable = data_checkout.content;
        this._loader.hide();
      }, error: (e): void => {
        this._loader.hide();
        this._alert.warning('Tenemos problemas, reintenta mas tarde.')
      }
    })
  }

}
