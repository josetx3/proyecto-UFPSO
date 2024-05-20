import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieScheduleTableComponent } from './pages/movie-schedule-table/movie-schedule-table.component';
import {SharedModule} from "@app/shared/shared.module";
import {
  MovieScheduleRoutingModule
} from "@app/modules/administration/pages/movie-schedule/movie-schedule-routing.module";
import { MovieScheduleEditComponent } from './pages/movie-schedule-edit/movie-schedule-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {NgxMatDatetimePickerModule} from "@angular-material-components/datetime-picker";



@NgModule({
  declarations: [
    MovieScheduleTableComponent,
    MovieScheduleEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MovieScheduleRoutingModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    NgxMatDatetimePickerModule,
    ReactiveFormsModule
  ]
})
export class MovieScheduleModule { }
