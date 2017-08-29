import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CookListPageComponent } from './cook-list-page/cook-list-page.component';
import { CookbookEditComponent } from './cookbook-edit/cookbook-edit.component';

// 引入第三方共享模块
import { SharedModule } from "../../shared/shared.module";
import { MaterialModule } from "@angular/material";
import { SharedEditModule } from "../../shared-edit/shared-edit.module";



import { CookbookService } from "./cookbook.service"

@NgModule({
  imports: [
    CommonModule,FormsModule,
    SharedModule,MaterialModule,
    RouterModule.forChild([
      { path: '', component: CookListPageComponent, pathMatch: 'full' }, // 页面/：参数
      { path: 'edit/:id', component: CookbookEditComponent, pathMatch: 'full' }
     
    ])
  ],
  providers:[CookbookService],
  declarations: [CookListPageComponent,CookbookEditComponent]
 
})
export class CookbookModule { }
