import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from './layouts/nav/nav.component';
import {NavbarComponent} from './layouts/navbar/navbar.component';
import {RouterLink} from "@angular/router";
import { LoadingComponent } from './layouts/loading/loading.component';


@NgModule({
  declarations: [
    NavComponent,
    NavbarComponent,
    LoadingComponent
  ],
    exports: [
        NavComponent,
        NavbarComponent,
        LoadingComponent
    ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class SharedModule {
}
