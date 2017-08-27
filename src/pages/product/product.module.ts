import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductListPageComponent } from './product-list-page/product-list-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ProductListPageComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [ProductListPageComponent]
})
export class ProductModule { }
