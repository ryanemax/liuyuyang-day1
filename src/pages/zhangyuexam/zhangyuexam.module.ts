import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ZhangyuExamPageComponent } from './zhangyu-exam-page/zhangyu-exam-page.component';
import { SharedModule } from "../../shared/shared.module";
import { MatButtonModule } from "@angular/material"
@NgModule({
  imports: [
    CommonModule,SharedModule,MatButtonModule,
    RouterModule.forChild([
      { path: '', component: ZhangyuExamPageComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [ZhangyuExamPageComponent]
})
export class ZhangyuexamModule { 
  
}
