import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from './layouts/nav/nav.component';
import {NavbarComponent} from './layouts/navbar/navbar.component';
import {RouterLink} from "@angular/router";


@NgModule({
  declarations: [
    NavComponent,
    NavbarComponent
  ],
  exports: [
    NavComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class SharedModule {
}
