import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HanshengBookStorePageComponent } from './hansheng-book-store-page/hansheng-book-store-page.component';
import { HanshengBookItemComponent } from './hansheng-book-item/hansheng-book-item.component';
import { MaterialModule } from "@angular/material";
// 引入第三方共享模块
import { SharedModule } from "../../shared/shared.module";
import { HanshengBookStoreService } from "./hansheng-book-store.service"

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild([
      { path: '', component: HanshengBookStorePageComponent, pathMatch: 'full' }
    ])
  ],
  providers:[HanshengBookStoreService],
  declarations: [HanshengBookStorePageComponent,
    HanshengBookItemComponent]
})
export class HanshengBookStoreModule { }
