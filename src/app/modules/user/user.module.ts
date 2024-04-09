import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainUserComponent } from './pages/main-user/main-user.component';
import { HomeComponent } from './pages/home/home.component';
import { FoodComponent } from './pages/food/food.component';
import { MovieComponent } from './pages/movie/movie.component';
import { UpcomingMovieComponent } from './pages/upcoming-movie/upcoming-movie.component';
import {UserRoutingModule} from "@app/modules/user/user-routing.module";
import {SharedModule} from "@app/shared/shared.module";
import { LoginComponent } from './auth/pages/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { MultiFactorAuthComponent } from './auth/pages/multi-factor-auth/multi-factor-auth.component';
import {MatDialogModule} from "@angular/material/dialog";
import {CodeInputModule} from "angular-code-input";
import { RegisterComponent } from './auth/pages/register/register.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    MainUserComponent,
    HomeComponent,
    FoodComponent,
    MovieComponent,
    UpcomingMovieComponent,
    LoginComponent,
    MultiFactorAuthComponent,
    RegisterComponent
  ],
    imports: [
        CommonModule,
        UserRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        MatDialogModule,
        CodeInputModule,
        MatDatepickerModule,
        MatInputModule,
    ]
})
export class UserModule { }
