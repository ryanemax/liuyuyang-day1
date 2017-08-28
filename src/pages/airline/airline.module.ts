import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from "@angular/material";
import { AirlineListComponent } from './airline-list/airline-list.component';
// 引入第三方共享模块
import { SharedModule } from "../../shared/shared.module";

import { AirlineItemComponent } from './airline-item/airline-item.component';
import { AirlineEditComponent } from './airline-edit/airline-edit.component';
import { AirlineService } from "./airline.service"
@NgModule({
  imports: [
    CommonModule,FormsModule,
    SharedModule,MaterialModule,
    RouterModule.forChild([
      { path: '', component: AirlineListComponent, pathMatch: 'full' },
      { path: 'edit/:price', component: AirlineEditComponent, pathMatch: 'full' }
    ])
  ],
  providers:[AirlineService],
  declarations: [AirlineListComponent,AirlineItemComponent,AirlineEditComponent]
})
export class AirlineModule { }
