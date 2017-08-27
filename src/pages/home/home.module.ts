import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// 引入页面组件
import { HomePageComponent } from './home-page/home-page.component';

// 引入标签组件
import { DiyButtonComponent } from '../../app/diy-button/diy-button.component';

// 引入管道
import { SexNamePipe } from '../../app/sex-name.pipe';

// 引入指令
import { HighlightDirective } from '../../app/highlight.directive';
import { ButtonCircleDirective } from '../../app/button-circle.directive';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: HomePageComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [HomePageComponent,DiyButtonComponent,
  SexNamePipe,
  HighlightDirective,ButtonCircleDirective
  ]
})
export class HomeModule { }
