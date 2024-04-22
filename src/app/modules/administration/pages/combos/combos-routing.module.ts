import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CombosTableComponent} from "@app/modules/administration/pages/combos/pages/combos-table/combos-table.component";


const routes: Routes = [
  {
    path: '',
    component: CombosTableComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CombosRoutingModule {
}
