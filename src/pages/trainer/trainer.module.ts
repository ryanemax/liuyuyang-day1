import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

import { TrainerListPageComponent } from './trainer-list-page/trainer-list-page.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: TrainerListPageComponent, pathMatch: 'full' }
    ])
  ],
  
  declarations: [TrainerListPageComponent]
})
export class TrainerModule { }
