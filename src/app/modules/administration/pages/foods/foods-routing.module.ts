import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {FoodsTableComponent} from "@app/modules/administration/pages/foods/pages/foods-table/foods-table.component";
import {FoodsEditComponent} from "@app/modules/administration/pages/foods/pages/foods-edit/foods-edit.component";

const routes: Routes = [
  {
    path: '',
    component: FoodsTableComponent
  },
  {
    path: ':id',
    component: FoodsEditComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodsRoutingModule { }
