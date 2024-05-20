import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CombosTableComponent } from './pages/combos-table/combos-table.component';
import {CombosRoutingModule} from "@app/modules/administration/pages/combos/combos-routing.module";
import {SharedModule} from "@app/shared/shared.module";
import { CombosEditComponent } from './pages/combos-edit/combos-edit.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    CombosTableComponent,
    CombosEditComponent
  ],
    imports: [
        CommonModule,
        CombosRoutingModule,
        SharedModule,
        ReactiveFormsModule
    ]
})
export class CombosModule { }
