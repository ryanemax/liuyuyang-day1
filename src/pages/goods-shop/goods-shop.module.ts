import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GoodsInfoPageComponent } from './goods-info-page/goods-info-page.component';
import { GoodsItemComponent } from './goods-item/goods-item.component';
import { GoodsEditComponent } from './goods-edit/goods-edit.component';
import { GoodsAnalysisComponent } from './goods-analysis/goods-analysis.component';

import { MatButtonModule } from "@angular/material"
import { SharedModule } from "../../shared/shared.module";
import { SharedEditModule } from "../../shared-edit/shared-edit.module";

import { GoodsShopService } from "./goods-shop.service"

import { CommonButtonDirective } from './common-button.directive';

@NgModule({
  imports: [
    CommonModule,MatButtonModule,
    FormsModule,SharedModule,
    SharedEditModule,
    RouterModule.forChild([
      { path: '', component: GoodsInfoPageComponent, pathMatch: 'full' },
      { path: 'edit/:id', component: GoodsEditComponent, pathMatch: 'full' },
      { path: 'analysis', component: GoodsAnalysisComponent, pathMatch: 'full' }
    ])
  ], 
  providers:[GoodsShopService],
  declarations: [GoodsInfoPageComponent,GoodsItemComponent,GoodsEditComponent,CommonButtonDirective,GoodsAnalysisComponent]
})
export class GoodsShopModule { }
