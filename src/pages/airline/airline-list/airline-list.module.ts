import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AirlineListComponent } from './airline-list/airline-list.component';
//@装饰器
@NgModule({
  imports: [
    CommonModule,//angualr 内置操作
    RouterModule.forChild([
      { path: '', component: AirlineListComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [AirlineListComponent]
})
export class AirlineListModule { }
