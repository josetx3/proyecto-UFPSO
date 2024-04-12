import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from './layouts/nav/nav.component';
import {NavbarComponent} from './layouts/navbar/navbar.component';
import {RouterLink} from "@angular/router";
import { LoadingComponent } from './layouts/loading/loading.component';
import { CardMovieComponent } from './layouts/card-movie/card-movie.component';
import {InputMaskDirective} from "@app/shared/directives/input-mask/input-mask.directive";
import {MessageErrorsDirective} from "@app/shared/directives/field-errors/directive/message-errors.directive";
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import { CardFoodComponent } from './layouts/card-food/card-food.component';


@NgModule({
  declarations: [
    NavComponent,
    NavbarComponent,
    LoadingComponent,
    CardMovieComponent,
    InputMaskDirective,
    MessageErrorsDirective,
    CardFoodComponent
  ],
    exports: [
        NavComponent,
        NavbarComponent,
        LoadingComponent,
        CardMovieComponent,
        InputMaskDirective,
        MessageErrorsDirective,
        CardFoodComponent
    ],
  imports: [
    CommonModule,
    RouterLink,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ]
})
export class SharedModule {
}
