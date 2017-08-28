import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TrainerListPageComponent } from './trainer-list-page/trainer-list-page.component';
import {TrainerService} from './trainer.service';
import { TrainerEditComponent } from './trainer-edit/trainer-edit.component';

import { SharedModule } from "../../shared/shared.module";
import { MaterialModule } from "@angular/material"
import { TrainerItemComponent } from './trainer-item/trainer-item.component';



@NgModule({
  imports: [
    CommonModule,FormsModule,
    SharedModule,MaterialModule,
    RouterModule.forChild([
      { path: '', component: TrainerListPageComponent, pathMatch: 'full' },
      { path: 'edit/:id', component: TrainerEditComponent, pathMatch: 'full' }
    ])
  ],
  providers:[TrainerService],
  declarations: [TrainerListPageComponent,TrainerEditComponent,TrainerItemComponent]
})
export class TrainerModule { }
