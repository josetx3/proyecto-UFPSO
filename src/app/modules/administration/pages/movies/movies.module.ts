import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesTableComponent } from './pages/movies-table/movies-table.component';
import {MoviesRoutingModule} from "@app/modules/administration/pages/movies/movies-routing.module";
import {SharedModule} from "@app/shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    MoviesTableComponent,

  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class MoviesModule { }
