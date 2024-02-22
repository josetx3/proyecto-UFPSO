import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LoginComponent} from "@app/modules/user/auth/pages/login/login.component";
import {StorageService} from "@app/core/services/storage.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  user: any;

  constructor(
    private dialog: MatDialog,
    private _storage: StorageService
  ) {
    this.user = this._storage.getItem('user_data')
  }

  loginModal(): void {
    this.dialog.open(LoginComponent, {
      width: '320px',
      height: '520px',
    })
  }

  Logout(): void {
    alert('ASd')
  }

}
