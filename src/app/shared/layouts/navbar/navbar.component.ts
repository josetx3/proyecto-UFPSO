import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LoginComponent} from "@app/modules/user/auth/pages/login/login.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    private dialog: MatDialog
  ) {
  }

  loginModal():void{
    this.dialog.open(LoginComponent,{
      width: '320px',
      height: '420px',
    })
  }

}
