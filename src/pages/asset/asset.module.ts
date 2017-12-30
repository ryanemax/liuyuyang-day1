import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AssetListPageComponent } from './asset-list-page/asset-list-page.component';
import { AssetEditPageComponent } from './asset-edit-page/asset-edit-page.component';
import { AssetDetailPageComponent } from './asset-detail-page/asset-detail-page.component';
import { AssetService } from './asset.service'
import { MatButtonModule } from "@angular/material"
import {MatSelectModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AssetCurrencyPipe } from './asset-currency.pipe';
import { AssetButtonDirective } from './asset-button.directive';
import {MatDatepickerModule,MatNativeDateModule} from '@angular/material';
import { AssetAnalysisPageComponent } from './asset-analysis-page/asset-analysis-page.component';
import { AssetEditDialogComponent,DialogResult } from './asset-edit-dialog/asset-edit-dialog.component';

@NgModule({
  imports: [
    CommonModule,MatButtonModule,MatDatepickerModule,MatNativeDateModule,MatSelectModule,MatButtonModule,FormsModule,RouterModule.forChild([
       { path: '', component: AssetListPageComponent, pathMatch: 'full' }
    ]),
    RouterModule.forChild([
       { path: 'edit/:id', component: AssetEditPageComponent, pathMatch: 'full' },
       { path: 'view/:id', component: AssetDetailPageComponent, pathMatch: 'full' },
       { path: 'analysis', component: AssetAnalysisPageComponent, pathMatch: 'full' },
      
    ])
  ],
  declarations: [
    AssetListPageComponent,
    AssetEditPageComponent,
    AssetAnalysisPageComponent,    
    AssetEditDialogComponent,DialogResult,
    AssetDetailPageComponent,AssetCurrencyPipe,AssetButtonDirective],
  providers: [AssetService],
  entryComponents:[DialogResult,AssetEditDialogComponent]  
})

export class AssetModule { 

}
