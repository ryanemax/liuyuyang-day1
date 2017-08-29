import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPreviewManagerComponent } from './card-preview-manager/card-preview-manager.component';
import { RouterModule } from '@angular/router';
import { CardPreviewService } from './card-preview.service';
import { CardEditComponent } from './card-edit/card-edit.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CardPreviewManagerComponent, pathMatch: 'full' },
      { path: 'edit/:objectId', component: CardEditComponent, pathMatch: 'full' }
    ])
  ],
  providers:[CardPreviewService],
  declarations: [CardPreviewManagerComponent,CardEditComponent]
})
export class CardPreviewModule { }
