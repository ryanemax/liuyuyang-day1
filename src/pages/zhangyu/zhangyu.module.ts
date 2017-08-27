import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentEditComponent } from './department-edit/department-edit.component';

import { ZhangyuService } from "./zhangyu.service";

// 引入第三方共享模块
import { SharedModule } from "../../shared/shared.module";
import { MaterialModule } from "@angular/material";
@NgModule({
  imports: [
    CommonModule,FormsModule,
    SharedModule,MaterialModule,
    RouterModule.forChild([
      { path: '', component: DepartmentListComponent, pathMatch: 'full' },
      { path: 'edit/:id', component: DepartmentEditComponent, pathMatch: 'full' },
    ])
 
  ],
  providers:[ZhangyuService],
  declarations: [
    DepartmentListComponent,
    DepartmentEditComponent,]
})
export class ZhangyuModule { }
