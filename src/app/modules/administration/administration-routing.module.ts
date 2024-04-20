import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {
  MainAdministrationComponent
} from "@app/modules/administration/pages/main-administration/main-administration.component";
import {DashboardComponent} from "@app/modules/administration/pages/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: MainAdministrationComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule {
}
