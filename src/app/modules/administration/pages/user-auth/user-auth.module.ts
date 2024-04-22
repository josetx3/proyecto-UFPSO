import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAuthTableComponent } from './pages/user-auth-table/user-auth-table.component';
import {UserAuthRoutingModule} from "@app/modules/administration/pages/user-auth/user-auth-routing.module";
import {SharedModule} from "@app/shared/shared.module";



@NgModule({
  declarations: [
    UserAuthTableComponent
  ],
  imports: [
    CommonModule,
    UserAuthRoutingModule,
    SharedModule
  ]
})
export class UserAuthModule { }
