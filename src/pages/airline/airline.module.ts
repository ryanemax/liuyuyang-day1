import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from "@angular/material";
import { AirlineListComponent } from './airline-list/airline-list.component';
// 引入第三方共享模块
import { SharedModule } from "../../shared/shared.module";
import {MatDatepickerModule,MatNativeDateModule} from '@angular/material';
import { AirlineItemComponent } from './airline-item/airline-item.component';
import { AirlineEditComponent } from './airline-edit/airline-edit.component';
import { AirlineVisitComponent } from './airline-visit/airline-visit.component';
import { AirlineService } from "./airline.service"
import { TableStyleDirective } from "./table-style.directive"

@NgModule({
  imports: [
    CommonModule,FormsModule,
    SharedModule,MatButtonModule,
    MatDatepickerModule,MatNativeDateModule,
    RouterModule.forChild([
      { path: '', component: AirlineListComponent, pathMatch: 'full' },
      { path: 'edit/:id', component: AirlineEditComponent, pathMatch: 'full' }
    ])
  ],
  providers:[AirlineService],
  declarations: [
    AirlineListComponent,
    AirlineItemComponent,
    AirlineEditComponent,
    AirlineVisitComponent,
    TableStyleDirective]
})
export class AirlineModule { }
