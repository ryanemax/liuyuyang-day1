import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';

@NgModule({
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild([
      { path: '', component: AboutPageComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [AboutPageComponent]
})
export class AboutModule { }
