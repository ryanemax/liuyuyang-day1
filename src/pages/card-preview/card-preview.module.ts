import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPreviewManagerComponent } from './card-preview-manager/card-preview-manager.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CardPreviewManagerComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [CardPreviewManagerComponent]
})
export class CardPreviewModule { }
