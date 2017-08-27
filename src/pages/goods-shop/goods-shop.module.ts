import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { GoodsInfoPageComponent } from './goods-info-page/goods-info-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: GoodsInfoPageComponent, pathMatch: 'full' }
    ])
  ], 
  declarations: [GoodsInfoPageComponent]
})
export class GoodsShopModule { }
