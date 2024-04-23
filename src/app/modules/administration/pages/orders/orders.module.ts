import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersTableComponent } from './pages/orders-table/orders-table.component';
import {OrdersRoutingModule} from "@app/modules/administration/pages/orders/orders-routing.module";
import {SharedModule} from "@app/shared/shared.module";



@NgModule({
  declarations: [
    OrdersTableComponent
  ],
    imports: [
        CommonModule,
        OrdersRoutingModule,
        SharedModule
    ]
})
export class OrdersModule { }
