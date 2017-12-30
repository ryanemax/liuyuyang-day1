import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BookListComponent } from './book-list/book-list.component';
import { BookNewComponent } from './book-new/book-new.component';
import { BookManagementService } from './book-management.service';

import { SharedModule } from "../../shared/shared.module";
import { MatButtonModule } from "@angular/material"


@NgModule({
  imports: [
    CommonModule,FormsModule,
    SharedModule,MatButtonModule,
    RouterModule.forChild([
      { path: '', component: BookListComponent, pathMatch: 'full' },
      { path: 'edit/:id', component: BookNewComponent, pathMatch: 'full' }
    ])
  ],
  providers:[BookManagementService],
  declarations: [BookListComponent, BookNewComponent]
})
export class BookManagementModule { }
