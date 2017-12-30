import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

// 引入编辑功能组件
import { EditTagComponent } from './edit-tag/edit-tag.component';


@NgModule({
  imports: [
    CommonModule,FormsModule,MatButtonModule
  ],
  declarations: [EditTagComponent],
  exports:[EditTagComponent]
})
export class SharedEditModule { }
