import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesTableComponent } from './pages/movies-table/movies-table.component';
import {MoviesRoutingModule} from "@app/modules/administration/pages/movies/movies-routing.module";
import {SharedModule} from "@app/shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    MoviesTableComponent,

  ],
    imports: [
        CommonModule,
        MoviesRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule
    ]
})
export class MoviesModule { }
