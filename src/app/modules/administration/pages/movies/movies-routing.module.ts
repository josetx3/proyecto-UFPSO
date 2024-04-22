import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MoviesTableComponent} from "@app/modules/administration/pages/movies/pages/movies-table/movies-table.component";

const routes: Routes = [
  {
    path: '',
    component: MoviesTableComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {
}
