import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from "@app/modules/user/auth/pages/register/register.component";
import {OrderSummaryComponent} from "@app/shared/layouts/order-summary/order-summary.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@app/modules/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'administration',
    loadChildren: () => import('@app/modules/administration/administration.module').then(m => m.AdministrationModule)
  },
  {
    path: 'order-summary',
    component: OrderSummaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
