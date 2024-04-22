import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {
  SettingMainComponent
} from "@app/modules/administration/pages/setting/pages/setting-main/setting-main.component";


const routes: Routes = [
  {
    path: '',
    component: SettingMainComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule {
}
