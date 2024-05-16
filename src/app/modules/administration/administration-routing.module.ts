import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {
  MainAdministrationComponent
} from "@app/modules/administration/pages/main-administration/main-administration.component";
import {DashboardComponent} from "@app/modules/administration/pages/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: MainAdministrationComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'user',
        loadChildren: () => import('@app/modules/administration/pages/user-auth/user-auth.module').then(m => m.UserAuthModule)
      },
      {
        path: 'movies',
        loadChildren: () => import('@app/modules/administration/pages/movies/movies.module').then(m => m.MoviesModule)
      },
      {
        path: 'movies_schedule',
        loadChildren: () => import('@app/modules/administration/pages/movie-schedule/movie-schedule.module').then(m => m.MovieScheduleModule)
      },
      {
        path: 'food',
        loadChildren: () => import('@app/modules/administration/pages/foods/foods.module').then(m => m.FoodsModule)
      },
      {
        path: 'orders',
        loadChildren: () => import('@app/modules/administration/pages/orders/orders.module').then(m => m.OrdersModule)
      },
      {
        path: 'combos',
        loadChildren: () => import('@app/modules/administration/pages/combos/combos.module').then(m => m.CombosModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('@app/modules/administration/pages/setting/setting.module').then(m => m.SettingModule)
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule {
}
