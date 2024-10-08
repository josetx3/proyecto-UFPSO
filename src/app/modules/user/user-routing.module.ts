import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainUserComponent} from "@app/modules/user/pages/main-user/main-user.component";
import {HomeComponent} from "@app/modules/user/pages/home/home.component";
import {FoodComponent} from "@app/modules/user/pages/food/food.component";
import {MovieComponent} from "@app/modules/user/pages/movie/movie.component";
import {UpcomingMovieComponent} from "@app/modules/user/pages/upcoming-movie/upcoming-movie.component";
import {ModalMovieInfoComponent} from "@app/shared/layouts/modal-movie-info/modal-movie-info.component";
import {PurchaseComponent} from "@app/modules/user/pages/purchase/purchase.component";
import {authGuard} from "@app/core/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: MainUserComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'food',
        component: FoodComponent
      },
      {
        path: 'movie',
        component: MovieComponent
      },
      {
        path: 'upcoming-movies',
        component: UpcomingMovieComponent
      },
      {
        path: 'movie/:movie_id',
        component: ModalMovieInfoComponent
      },
      {
        path: 'purchase',
        component: PurchaseComponent,
        canActivate: [authGuard]
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
