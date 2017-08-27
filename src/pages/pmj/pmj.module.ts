import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PmjPageComponent } from './pmj-page/pmj-page.component';
import { PmjItemComponent } from './pmj-item/pmj-item.component';
import { PmjEditComponent } from './pmj-edit/pmj-edit.component';
import { PmjService } from "./pmj.service"

// 引入第三方共享模块
import { SharedModule } from "../../shared/shared.module";
import { SharedPmjModule } from "../../shared-pmj/shared-pmj.module";
import { MaterialModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    SharedPmjModule,
    MaterialModule,
    RouterModule.forChild([
      { path: '', component: PmjPageComponent, pathMatch: 'full' },
      { path: 'edit/:name', component: PmjEditComponent, pathMatch: 'full' }
    ])
  ],
  providers:[PmjService],
  declarations: [PmjPageComponent,PmjItemComponent,PmjEditComponent]
})
export class PmjModule { }
