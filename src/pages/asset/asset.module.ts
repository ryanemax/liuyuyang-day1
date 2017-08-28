import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AssetListPageComponent } from './asset-list-page/asset-list-page.component';
import { AssetEditPageComponent } from './asset-edit-page/asset-edit-page.component';
import { AssetDetailPageComponent } from './asset-detail-page/asset-detail-page.component';
import { AssetService } from './asset.service'
import { MaterialModule } from "@angular/material"
import {MdSelectModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AssetCurrencyPipe } from './asset-currency.pipe';
import { AssetButtonDirective } from './asset-button.directive';


@NgModule({
  imports: [
    CommonModule,MaterialModule,MdSelectModule,MdButtonModule,FormsModule,RouterModule.forChild([
       { path: '', component: AssetListPageComponent, pathMatch: 'full' }
    ]),
    RouterModule.forChild([
       { path: 'edit/:id', component: AssetEditPageComponent, pathMatch: 'full' },
       { path: 'view/:id', component: AssetDetailPageComponent, pathMatch: 'full' },
    ])
  ],
  declarations: [
    AssetListPageComponent,
    AssetEditPageComponent,
    AssetDetailPageComponent,AssetCurrencyPipe,AssetButtonDirective],
  providers: [AssetService]
})

export class AssetModule { 

}
