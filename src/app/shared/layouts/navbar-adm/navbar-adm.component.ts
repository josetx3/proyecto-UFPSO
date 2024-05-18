import {Component} from '@angular/core';
import {AuthService} from "@app/core/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar-adm',
  templateUrl: './navbar-adm.component.html',
  styleUrls: ['./navbar-adm.component.scss']
})
export class NavbarAdmComponent {

  reduceNavBar: boolean = false;

  constructor(
    private router: Router,
    private _auth: AuthService,
  ) {
  }

  navBarWidth() {
    this.reduceNavBar = !this.reduceNavBar;
  }

  logout(): void {
    this._auth.logout();
    this.router.navigateByUrl('/').then();
  }
}
