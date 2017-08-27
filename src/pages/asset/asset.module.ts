import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AssetListPageComponent } from './asset-list-page/asset-list-page.component';
import { AssetAddPageComponent } from './asset-add-page/asset-add-page.component';
import { AssetEditPageComponent } from './asset-edit-page/asset-edit-page.component';
import { AssetDetailPageComponent } from './asset-detail-page/asset-detail-page.component';


@NgModule({
  imports: [
    CommonModule, RouterModule.forChild([
      { path: '', component: AssetListPageComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [AssetListPageComponent, AssetAddPageComponent,
    AssetEditPageComponent,
    AssetDetailPageComponent],

})
export class AssetModule { }
