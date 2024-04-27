import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from './layouts/nav/nav.component';
import {NavbarComponent} from './layouts/navbar/navbar.component';
import {RouterLink, RouterLinkActive} from "@angular/router";
import { LoadingComponent } from './layouts/loading/loading.component';
import { CardMovieComponent } from './layouts/card-movie/card-movie.component';
import {InputMaskDirective} from "@app/shared/directives/input-mask/input-mask.directive";
import {MessageErrorsDirective} from "@app/shared/directives/field-errors/directive/message-errors.directive";
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import { CardFoodComponent } from './layouts/card-food/card-food.component';
import { ModalMovieInfoComponent } from './layouts/modal-movie-info/modal-movie-info.component';
import { CheckoutComponent } from './layouts/checkout/checkout.component';
import { NavbarAdmComponent } from './layouts/navbar-adm/navbar-adm.component';
import { TableComponent } from './layouts/table/table.component';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {DataTypeTablePipe} from "@app/shared/pipes/data-type-table.pipe";
import {GetterPropertyPipe} from "@app/shared/pipes/getter-property.pipe";
import {MatPaginatorModule} from "@angular/material/paginator";
import {CustomIsoPipe} from "@app/shared/pipes/custom-iso.pipe";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {NgSelectModule} from "@ng-select/ng-select";


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
    CustomIsoPipe
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
    NgSelectModule
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
    ],
  providers: [
    DataTypeTablePipe,
    CustomIsoPipe
  ]
})
export class SharedModule {
}
