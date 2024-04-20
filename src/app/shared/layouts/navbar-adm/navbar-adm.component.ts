import {Component} from '@angular/core';

@Component({
  selector: 'app-navbar-adm',
  templateUrl: './navbar-adm.component.html',
  styleUrls: ['./navbar-adm.component.scss']
})
export class NavbarAdmComponent {

  reduceNavBar: boolean = false;

  navBarWidth() {
    this.reduceNavBar = !this.reduceNavBar;
  }


}
