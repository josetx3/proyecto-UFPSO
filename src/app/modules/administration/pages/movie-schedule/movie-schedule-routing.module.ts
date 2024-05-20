import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {
  MovieScheduleTableComponent
} from "@app/modules/administration/pages/movie-schedule/pages/movie-schedule-table/movie-schedule-table.component";
import {
  MovieScheduleEditComponent
} from "@app/modules/administration/pages/movie-schedule/pages/movie-schedule-edit/movie-schedule-edit.component";

const routes: Routes = [
  {
    path: '',
    component: MovieScheduleTableComponent
  },
  {
    path: ':movie_id',
    component: MovieScheduleEditComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieScheduleRoutingModule {
}
