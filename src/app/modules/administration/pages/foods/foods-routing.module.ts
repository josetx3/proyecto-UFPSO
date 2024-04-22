import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {FoodsTableComponent} from "@app/modules/administration/pages/foods/pages/foods-table/foods-table.component";

const routes: Routes = [
  {
    path: '',
    component: FoodsTableComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodsRoutingModule { }
