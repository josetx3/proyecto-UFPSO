import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {
  UserAuthTableComponent
} from "@app/modules/administration/pages/user-auth/pages/user-auth-table/user-auth-table.component";

const routes: Routes = [
  {
    path: '',
    component: UserAuthTableComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAuthRoutingModule {
}
