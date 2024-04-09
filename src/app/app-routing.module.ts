import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from "@app/modules/user/auth/pages/register/register.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@app/modules/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
