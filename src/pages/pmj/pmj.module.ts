import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PmjPageComponent } from './pmj-page/pmj-page.component';

// 引入第三方共享模块
import { SharedModule } from "../../shared/shared.module";
import { MaterialModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild([
      { path: '', component: PmjPageComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [PmjPageComponent]
})
export class PmjModule { }
