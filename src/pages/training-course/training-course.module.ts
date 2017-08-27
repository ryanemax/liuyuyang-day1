import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TrainingCourseInfoComponent } from './training-course-info/training-course-info.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: TrainingCourseInfoComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [TrainingCourseInfoComponent]
})
export class TrainingCourseModule { }
