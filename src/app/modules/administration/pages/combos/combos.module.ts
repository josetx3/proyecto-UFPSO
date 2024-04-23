import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CombosTableComponent } from './pages/combos-table/combos-table.component';
import {CombosRoutingModule} from "@app/modules/administration/pages/combos/combos-routing.module";
import {SharedModule} from "@app/shared/shared.module";



@NgModule({
  declarations: [
    CombosTableComponent
  ],
    imports: [
        CommonModule,
        CombosRoutingModule,
        SharedModule
    ]
})
export class CombosModule { }
