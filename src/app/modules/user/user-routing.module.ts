import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainUserComponent} from "@app/modules/user/pages/main-user/main-user.component";
import {HomeComponent} from "@app/modules/user/pages/home/home.component";

const routes: Routes = [
  {
    path: '',
    component: MainUserComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
