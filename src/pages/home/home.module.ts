import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// 引入页面组件
import { HomePageComponent } from './home-page/home-page.component';

// 引入第三方共享模块
import { SharedModule } from "../../shared/shared.module";
import { MaterialModule } from "@angular/material"

@NgModule({
  imports: [
    CommonModule,
    SharedModule,MaterialModule,
    RouterModule.forChild([
      { path: '', component: HomePageComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [HomePageComponent]
})
export class HomeModule { }
