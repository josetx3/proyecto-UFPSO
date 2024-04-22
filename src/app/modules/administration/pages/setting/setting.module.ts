import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingMainComponent } from './pages/setting-main/setting-main.component';
import {SettingRoutingModule} from "@app/modules/administration/pages/setting/setting-routing.module";



@NgModule({
  declarations: [
    SettingMainComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule
  ]
})
export class SettingModule { }
