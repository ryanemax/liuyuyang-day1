import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPreviewManagerComponent,AlertComponent } from './card-preview-manager/card-preview-manager.component';
import { RouterModule } from '@angular/router';
import { CardPreviewService } from './card-preview.service';
import { CardEditComponent } from './card-edit/card-edit.component';
import { FormsModule } from '@angular/forms';
import {DataSource} from '@angular/cdk';
import { MaterialModule } from '@angular/material';
// DataTable Depand CDK Table
import {CdkTableModule} from '@angular/cdk';
import {MdTableModule} from '@angular/material';
import { AddCardDailogComponent } from './add-card-dailog/add-card-dailog.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MaterialModule,
    // DataTable
    CdkTableModule,
    MdTableModule,
    RouterModule.forChild([
      { path: '', component: CardPreviewManagerComponent, pathMatch: 'full' },
      { path: 'edit/:objectId', component: CardEditComponent, pathMatch: 'full' }
    ])
  ],
  providers:[CardPreviewService],
  declarations: [CardPreviewManagerComponent,CardEditComponent,AlertComponent,AddCardDailogComponent],
  entryComponents:[AlertComponent,AddCardDailogComponent]
})
export class CardPreviewModule { }
