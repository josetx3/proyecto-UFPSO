import {Component, OnInit} from '@angular/core';
import {AlertService} from "@app/core/services/alert.service";
import {TableActions, TableColumn} from "@app/core/interfaces/table.interface";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-user-auth-table',
  templateUrl: './user-auth-table.component.html',
  styleUrls: ['./user-auth-table.component.scss'],
  providers: [DatePipe]
})
export class UserAuthTableComponent implements OnInit {

  userAuth: any[] = [
    {
      user_id: '1',
      user_name: 'Jose',
      user_lastname: 'Quintero',
      user_document: '1004945023',
      user_email: 'jlquinterol@ufpso.edu.co',
      user_phone: '3183843124',
      user_user: 'josetx3',
      user_status: 'Activo'
    },
    {
      user_id: '2',
      user_name: 'Yorman',
      user_lastname: 'Sanchez',
      user_document: '1004451024',
      user_email: 'yjcarrascals@ufpso.edu.co',
      user_phone: '3124574125',
      user_user: 'profeta',
      user_status: 'Activo'
    }
  ]

  menuEditUser: boolean = false;
  title: string = 'Nuevo usuario';
  image: string = './assets/img/profile-user.png';

  columnsTable: TableColumn[] = [
    {name: 'Nombre', isFilterable: true, key: 'user_name', type: 'text'},
    {name: 'Apellido', isFilterable: true, key: 'user_lastname', type: 'text'},
    {name: 'Documento', isFilterable: true, key: 'user_document', type: 'number'},
    {name: 'Correo', isFilterable: true, key: 'user_email', type: 'text'},
    {name: 'Usuario', isFilterable: true, key: 'user_user', type: 'text'},
    {name: 'Estado', key: 'user_status', type: 'statusName'},
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
    this.getUserTable();
  }

  createUser(): void {

  }

  edit(data: any): void {

  }

  unlockUser(user: any): void {
  }

  getUserTable(): void {
    this.dataTable = this.userAuth;
  }

}
