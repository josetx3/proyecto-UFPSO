import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LoginComponent} from "@app/modules/user/auth/pages/login/login.component";
import {StorageService} from "@app/core/services/storage.service";
import {AuthService} from "@app/core/services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  user: any;
  admin: any;

  constructor(
    private dialog: MatDialog,
    private _storage: StorageService,
    private _auth: AuthService
  ) {
    this.user = this._storage.getItem('user_data')
    this.admin = _storage.getItem('administrator')
  }

  loginModal(): void {
    this.dialog.open(LoginComponent, {
    })
  }

  Logout(): void {
    this._auth.logout();
  }

}
