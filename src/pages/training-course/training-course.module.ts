import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from "@angular/material";

import { TrainingCourseInfoComponent } from './training-course-info/training-course-info.component';
import { TrainingCourseService } from './training-course.service'
import { CirButtonComponent } from './cir-button/cir-button.component'
import { TrainingCourseItemComponent } from './training-course-item/training-course-item.component';
import { TrainingCourseEditComponent } from './training-course-edit/training-course-edit.component';
import { CircleButtonDirective } from './circle-button.directive'
import { StatusFinishPipe } from './status-finish.pipe'

@NgModule({
  imports: [
    CommonModule,FormsModule,
    MaterialModule,
    RouterModule.forChild([
      { path: '', component: TrainingCourseInfoComponent, pathMatch: 'full' },
      { path: 'edit/:name', component: TrainingCourseEditComponent, pathMatch: 'full' },
      { path: 'detail/:name', component: TrainingCourseItemComponent, pathMatch: 'full' },
    ])
  ],
  providers:[ TrainingCourseService ],
  declarations: [TrainingCourseInfoComponent
    ,CirButtonComponent,
    TrainingCourseEditComponent,
    TrainingCourseItemComponent,
    CircleButtonDirective,
    StatusFinishPipe]
})
export class TrainingCourseModule { }
