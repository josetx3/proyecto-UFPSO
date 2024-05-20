import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodsTableComponent } from './pages/foods-table/foods-table.component';
import {FoodsRoutingModule} from "@app/modules/administration/pages/foods/foods-routing.module";
import {SharedModule} from "@app/shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    FoodsTableComponent
  ],
    imports: [
        CommonModule,
        FoodsRoutingModule,
        SharedModule,
        ReactiveFormsModule
    ]
})
export class FoodsModule { }
