import {Component} from '@angular/core';
import {TableActions, TableColumn} from "@app/core/interfaces/table.interface";
import {AlertService} from "@app/core/services/alert.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss'],
  providers: [DatePipe]
})
export class OrdersTableComponent {

  purchaseOrders: any[] = [
    {
      order_id: '1',
      order_reference_payment: 'REF0001ABC',
      order_date_payment: '19-04-2024',
      order_auth_payment: 'AUTH00001AB',
      order_value: 25000,
      order_status: 'Aprobada'
    },
    {
      order_id: '2',
      order_reference_payment: 'REF00162CSW',
      order_date_payment: '20-04-2024',
      order_auth_payment: 'AUTH00005FV',
      order_value: 12000,
      order_status: 'Rechazada'
    },
    {
      order_id: '3',
      order_reference_payment: 'REF20162LUY',
      order_date_payment: '22-04-2024',
      order_auth_payment: 'AUTH00003FG',
      order_value: 15500,
      order_status: 'Pendiente'
    },

  ]

  title: string = 'Nueva pelicula';
  image: string = './assets/img/profile-user.png';

  columnsTable: TableColumn[] = [
    {name: 'Referencia de pago', isFilterable: true, key: 'order_reference_payment', type: 'text'},
    {name: 'Fecha de pago', isFilterable: true, key: 'order_date_payment', type: 'text'},
    {name: 'Autorizacion', isFilterable: true, key: 'order_auth_payment', type: 'text'},
    {name: 'Valor', isFilterable: true, key: 'order_value', type: 'text'},
    {name: 'Estado', isFilterable: true, key: 'order_status', type: 'statusName'},
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
    this.getOrderTable();
  }

  unlockMovie(user: any): void {
  }

  getOrderTable(): void {
    this.dataTable = this.purchaseOrders;
  }

}
