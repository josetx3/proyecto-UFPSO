import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from './layouts/nav/nav.component';
import {NavbarComponent} from './layouts/navbar/navbar.component';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {LoadingComponent} from './layouts/loading/loading.component';
import {CardMovieComponent} from './layouts/card-movie/card-movie.component';
import {InputMaskDirective} from "@app/shared/directives/input-mask/input-mask.directive";
import {MessageErrorsDirective} from "@app/shared/directives/field-errors/directive/message-errors.directive";
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {CardFoodComponent} from './layouts/card-food/card-food.component';
import {ModalMovieInfoComponent} from './layouts/modal-movie-info/modal-movie-info.component';
import {CheckoutComponent} from './layouts/checkout/checkout.component';
import {NavbarAdmComponent} from './layouts/navbar-adm/navbar-adm.component';
import {TableComponent} from './layouts/table/table.component';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {DataTypeTablePipe} from "@app/shared/pipes/data-type-table.pipe";
import {GetterPropertyPipe} from "@app/shared/pipes/getter-property.pipe";
import {MatPaginatorModule} from "@angular/material/paginator";
import {CustomIsoPipe} from "@app/shared/pipes/custom-iso.pipe";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {NgSelectModule} from "@ng-select/ng-select";
import {NgxMatDatetimePickerModule, NgxMatNativeDateModule} from "@angular-material-components/datetime-picker";
import { OrderSummaryComponent } from './layouts/order-summary/order-summary.component';
import { VideoScreenComponent } from './layouts/video-screen/video-screen.component';
import { Pague404Component } from './layouts/pague-404/pague-404.component';


@NgModule({
  declarations: [
    NavComponent,
    NavbarComponent,
    LoadingComponent,
    CardMovieComponent,
    InputMaskDirective,
    MessageErrorsDirective,
    CardFoodComponent,
    ModalMovieInfoComponent,
    CheckoutComponent,
    NavbarAdmComponent,
    TableComponent,
    DataTypeTablePipe,
    GetterPropertyPipe,
    CustomIsoPipe,
    OrderSummaryComponent,
    VideoScreenComponent,
    Pague404Component
  ],
  exports: [
    NavComponent,
    NavbarComponent,
    LoadingComponent,
    CardMovieComponent,
    InputMaskDirective,
    MessageErrorsDirective,
    CardFoodComponent,
    CheckoutComponent,
    NavbarAdmComponent,
    TableComponent,
    NgSelectModule,
    NgxMatNativeDateModule
  ],
  imports: [
    CommonModule,
    RouterLink,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    NgSelectModule,
    RouterLinkActive,
    NgxMatNativeDateModule,
    NgxMatDatetimePickerModule
  ],
  providers: [
    DataTypeTablePipe,
    CustomIsoPipe
  ]
})
export class SharedModule {
}
