import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';

import { SharedModule } from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,FormsModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: AboutPageComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [AboutPageComponent]
})
export class AboutModule { }
