import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPreviewManagerComponent,AlertComponent } from './card-preview-manager/card-preview-manager.component';
import { RouterModule } from '@angular/router';
import { CardPreviewService } from './card-preview.service';
import { FormsModule } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { MatButtonModule ,MatInputModule} from '@angular/material';
// DataTable Depand CDK Table
import {MatTableModule} from '@angular/material';
import { AddCardDailogComponent } from './add-card-dailog/add-card-dailog.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MatButtonModule,
    // DataTable
    MatInputModule,
    MatTableModule,
    RouterModule.forChild([
      { path: '', component: CardPreviewManagerComponent, pathMatch: 'full' },
    ])
  ],
  providers:[CardPreviewService],
  declarations: [CardPreviewManagerComponent,AlertComponent,AddCardDailogComponent],
  entryComponents:[AlertComponent,AddCardDailogComponent]
})
export class CardPreviewModule { }
