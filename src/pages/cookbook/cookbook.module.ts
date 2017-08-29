import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CookListPageComponent } from './cook-list-page/cook-list-page.component';
import { CookbookEditComponent } from './cookbook-edit/cookbook-edit.component';
import { CookbookItemComponent } from './cookbook-item/cookbook-item.component';
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
  declarations: [CookListPageComponent,CookbookEditComponent,CookbookItemComponent]
 
})
export class CookbookModule { }
