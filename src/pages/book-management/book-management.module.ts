import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { BookListComponent } from './book-list/book-list.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: BookListComponent, pathMatch: 'full' },
    ])
  ],
  declarations: [BookListComponent]
})
export class BookManagementModule { }
