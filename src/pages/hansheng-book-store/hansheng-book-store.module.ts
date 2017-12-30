import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HanshengBookStorePageComponent } from './hansheng-book-store-page/hansheng-book-store-page.component';
import { HanshengBookItemComponent } from './hansheng-book-item/hansheng-book-item.component';
import { MatButtonModule } from "@angular/material";
// 引入第三方共享模块
import { SharedModule } from "../../shared/shared.module";
import { HanshengBookStoreService } from "./hansheng-book-store.service"
import { HanshengBookStoreEditComponent } from './hansheng-book-store-edit/hansheng-book-store-edit.component'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: HanshengBookStorePageComponent, pathMatch: 'full' },
      { path: 'hansheng-edit/:id', component: HanshengBookStoreEditComponent, pathMatch: 'full' }
    ])
  ],
  providers:[HanshengBookStoreService],
  declarations: [HanshengBookStorePageComponent,
    HanshengBookItemComponent,
  HanshengBookStoreEditComponent]
})
export class HanshengBookStoreModule { }
