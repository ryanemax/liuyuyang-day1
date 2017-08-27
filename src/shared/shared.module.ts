import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 引入标签组件
import { DiyButtonComponent } from './diy-button/diy-button.component';

// 引入管道
import { SexNamePipe } from './sex-name.pipe';

// 引入指令
import { HighlightDirective } from './highlight.directive';
import { ButtonCircleDirective } from './button-circle.directive';

// 引入自定义主键
import { HanshengBookButtonComponent } from './hansheng-book-button/hansheng-book-button.component';

// 引入标签组件
import { LiucDeviceButtonComponent } from './liuc-device-button/liuc-device-button.component';
import { DeviceTypePipe } from './device-type.pipe';
import { DeviceRedMarkDirective } from './device-red-mark.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DiyButtonComponent,
    HanshengBookButtonComponent,
    SexNamePipe,
    HighlightDirective,ButtonCircleDirective,
    LiucDeviceButtonComponent,
    DeviceTypePipe,
    DeviceRedMarkDirective,
  ],
  exports: [
    DiyButtonComponent,
    SexNamePipe,
    HanshengBookButtonComponent,
    HighlightDirective,ButtonCircleDirective,
    LiucDeviceButtonComponent,
    DeviceTypePipe,
    DeviceRedMarkDirective,
  ]
})
export class SharedModule { }
