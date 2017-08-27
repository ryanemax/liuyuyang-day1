import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PmjPageComponent } from './pmj-page/pmj-page.component';
import { PmjItemComponent } from './pmj-item/pmj-item.component';

// 引入第三方共享模块
import { SharedModule } from "../../shared/shared.module";
import { SharedPmjModule } from "../../shared-pmj/shared-pmj.module";
import { MaterialModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SharedPmjModule,
    MaterialModule,
    RouterModule.forChild([
      { path: '', component: PmjPageComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [PmjPageComponent,PmjItemComponent]
})
export class PmjModule { }
