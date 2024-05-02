import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesTableComponent } from './pages/movies-table/movies-table.component';
import {MoviesRoutingModule} from "@app/modules/administration/pages/movies/movies-routing.module";
import {SharedModule} from "@app/shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatPseudoCheckboxModule} from "@angular/material/core";
import { MoviesEditComponent } from './pages/movies-edit/movies-edit.component';
import {NgxMatDatetimePickerModule} from "@angular-material-components/datetime-picker";



@NgModule({
  declarations: [
    MoviesTableComponent,
    MoviesEditComponent,

  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatPseudoCheckboxModule,
    NgxMatDatetimePickerModule
  ]
})
export class MoviesModule { }
