import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {OrdersTableComponent} from "@app/modules/administration/pages/orders/pages/orders-table/orders-table.component";

const routes: Routes = [
  {
    path: '',
    component: OrdersTableComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
