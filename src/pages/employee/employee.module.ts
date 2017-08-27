import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { EmployeeListPageComponent } from './employee-list-page/employee-list-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'',component:EmployeeListPageComponent,pathMatch:'full'}])
  ],
  declarations: [EmployeeListPageComponent]
})
export class EmployeeModule { }
