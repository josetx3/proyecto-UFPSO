import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from './layouts/nav/nav.component';
import {NavbarComponent} from './layouts/navbar/navbar.component';
import {RouterLink} from "@angular/router";
import { LoadingComponent } from './layouts/loading/loading.component';
import { CardMovieComponent } from './layouts/card-movie/card-movie.component';


@NgModule({
  declarations: [
    NavComponent,
    NavbarComponent,
    LoadingComponent,
    CardMovieComponent
  ],
    exports: [
        NavComponent,
        NavbarComponent,
        LoadingComponent,
        CardMovieComponent
    ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class SharedModule {
}
