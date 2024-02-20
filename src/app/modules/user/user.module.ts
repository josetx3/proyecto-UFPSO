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



@NgModule({
  declarations: [
    MainUserComponent,
    HomeComponent,
    FoodComponent,
    MovieComponent,
    UpcomingMovieComponent,
    LoginComponent,
    MultiFactorAuthComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatDialogModule,
    CodeInputModule,
  ]
})
export class UserModule { }
