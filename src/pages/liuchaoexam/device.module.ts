import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { DeviceItemComponent } from './device-item/device-item.component';
import { DeviceListPageComponent } from './device-list-page/device-list-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DeviceListPageComponent, pathMatch: 'full' }
    ])
  ],
  
  declarations: [DeviceItemComponent,DeviceListPageComponent]
})
export class DeviceModule { }
