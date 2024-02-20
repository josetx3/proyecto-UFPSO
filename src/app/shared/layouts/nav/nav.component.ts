import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LoginComponent} from "@app/modules/user/auth/pages/login/login.component";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor(
    private dialog: MatDialog
  ) {
  }


  loginModal(): void {
    this.dialog.open(LoginComponent,{
      width: '320px',
      height: '420px',
    })
  }

}
