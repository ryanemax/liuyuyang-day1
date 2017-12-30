import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentEditComponent } from './department-edit/department-edit.component';
import { DepartmentAnalysisPageComponent } from './department-analysis-page/department-analysis-page.component';
import { ZhangyuService } from "./zhangyu.service";

// 引入第三方共享模块
import { SharedModule } from "../../shared/shared.module";
import { MatButtonModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,FormsModule,
    SharedModule,MatButtonModule,
    RouterModule.forChild([
      { path: '', component: DepartmentListComponent, pathMatch: 'full' },
      { path: 'edit/:id', component: DepartmentEditComponent, pathMatch: 'full' },
      { path: 'departmentAnalysis', component: DepartmentAnalysisPageComponent, pathMatch: 'full' },
    ])
 
  ],
  providers:[ZhangyuService],
  declarations: [
    DepartmentListComponent,
    DepartmentEditComponent,
    DepartmentAnalysisPageComponent]
})
export class ZhangyuModule { }
