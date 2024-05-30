import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodsTableComponent } from './pages/foods-table/foods-table.component';
import {FoodsRoutingModule} from "@app/modules/administration/pages/foods/foods-routing.module";
import {SharedModule} from "@app/shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import { FoodsEditComponent } from './pages/foods-edit/foods-edit.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    FoodsTableComponent,
    FoodsEditComponent
  ],
  imports: [
    CommonModule,
    FoodsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class FoodsModule { }
