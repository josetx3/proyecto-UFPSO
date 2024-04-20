import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdministrationRoutingModule} from "@app/modules/administration/administration-routing.module";
import { MainAdministrationComponent } from './pages/main-administration/main-administration.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {SharedModule} from "@app/shared/shared.module";


@NgModule({
  declarations: [
    MainAdministrationComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    SharedModule
  ]
})
export class AdministrationModule {
}
