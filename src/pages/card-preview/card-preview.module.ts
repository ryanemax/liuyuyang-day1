import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPreviewManagerComponent } from './card-preview-manager/card-preview-manager.component';
import { RouterModule } from '@angular/router';
import { CardPreviewService } from './card-preview.service';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CardPreviewManagerComponent, pathMatch: 'full' }
    ])
  ],
  providers:[CardPreviewService],
  declarations: [CardPreviewManagerComponent]
})
export class CardPreviewModule { }
