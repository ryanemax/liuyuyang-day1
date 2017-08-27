import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HanshengBookStorePageComponent } from './hansheng-book-store-page/hansheng-book-store-page.component';

// 引入第三方共享模块
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: HanshengBookStorePageComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [HanshengBookStorePageComponent]
})
export class HanshengBookStoreModule { }
