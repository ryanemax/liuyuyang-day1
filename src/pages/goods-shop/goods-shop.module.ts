import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GoodsInfoPageComponent } from './goods-info-page/goods-info-page.component';
import { GoodsItemComponent } from './goods-item/goods-item.component';
import { GoodsEditComponent } from './goods-edit/goods-edit.component';

import { MaterialModule } from "@angular/material"

import { GoodsShopService } from "./goods-shop.service"

@NgModule({
  imports: [
    CommonModule,MaterialModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: GoodsInfoPageComponent, pathMatch: 'full' },
      { path: 'edit/:name', component: GoodsEditComponent, pathMatch: 'full' }
    ])
  ], 
  providers:[GoodsShopService],
  declarations: [GoodsInfoPageComponent,GoodsItemComponent,GoodsEditComponent]
})
export class GoodsShopModule { }
