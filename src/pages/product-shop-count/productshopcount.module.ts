import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductShopCountComponent } from './product-shop-count/product-shop-count.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ProductShopCountComponent, pathMatch: 'full' }
    ]),
  ],
 
  declarations: [ProductShopCountComponent,
  ]
})
export class ProductshopcountModule { }
