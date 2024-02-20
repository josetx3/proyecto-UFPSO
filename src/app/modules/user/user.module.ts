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



@NgModule({
  declarations: [
    MainUserComponent,
    HomeComponent,
    FoodComponent,
    MovieComponent,
    UpcomingMovieComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
