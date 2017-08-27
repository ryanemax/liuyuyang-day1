import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CookListPageComponent } from './cook-list-page/cook-list-page.component';
// 引入第三方共享模块
import { SharedModule } from "../../shared/shared.module";
import { MaterialModule } from "@angular/material"

@NgModule({
  imports: [
    CommonModule,FormsModule,
    SharedModule,MaterialModule,
    RouterModule.forChild([
      { path: '', component: CookListPageComponent, pathMatch: 'full' }
     
    ])
  ],
  declarations: [CookListPageComponent]
 
})
export class CookbookModule { }
