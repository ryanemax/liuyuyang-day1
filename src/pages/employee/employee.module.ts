import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { EmployeeListPageComponent } from './employee-list-page/employee-list-page.component';
import { EmployeeEditPageComponent } from './employee-edit-page/employee-edit-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
    {path:'',component:EmployeeListPageComponent,pathMatch:'full'},
    {path:'edit',component:EmployeeEditPageComponent,pathMatch:'full'}
  ])
  ],
  declarations: [EmployeeListPageComponent,EmployeeEditPageComponent]
})
export class EmployeeModule { }
