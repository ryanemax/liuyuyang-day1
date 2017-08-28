import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// 引入编辑功能组件
import { EditTagComponent } from './edit-tag/edit-tag.component';


@NgModule({
  imports: [
    CommonModule,FormsModule
  ],
  declarations: [EditTagComponent],
  exports:[EditTagComponent]
})
export class SharedEditModule { }
