import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { EmployeeListPageComponent } from './employee-list-page/employee-list-page.component';
import { EmployeeEditPageComponent } from './employee-edit-page/employee-edit-page.component';

// 引入第三方共享模块
import { MaterialModule } from "@angular/material";
import { EmployeeService } from "./employee.service";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    SharedModule,
    RouterModule.forChild([
    {path:'',component:EmployeeListPageComponent,pathMatch:'full'},
    {path:'edit/:id',component:EmployeeEditPageComponent,pathMatch:'full'}
  ])
  ],
  declarations: [EmployeeListPageComponent,EmployeeEditPageComponent],
  providers:[EmployeeService]
})
export class EmployeeModule { }
