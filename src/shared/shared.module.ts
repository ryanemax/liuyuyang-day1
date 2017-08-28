import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 引入标签组件
import { DiyButtonComponent } from './diy-button/diy-button.component';

// 引入管道
import { SexNamePipe } from './sex-name.pipe';
import { CurrencyFormatPipe } from './currency/currency-format/currency-format.pipe';
import { TypeSelectPipe } from './account-card/type-select.pipe';
import { ToKPipe } from './to-k.pipe';

// 引入指令
import { HighlightDirective } from './highlight.directive';
import { ButtonCircleDirective } from './button-circle.directive';
import { CurrencyHighlightDirective } from './currency/currency-highlight/currency-highlight.directive';
import { AccoundCardDirective } from './account-card/accound-card.directive';

// 引入自定义组件
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
    CurrencyFormatPipe,
    HighlightDirective,
    ButtonCircleDirective,
    CurrencyHighlightDirective,
    TypeSelectPipe,
    LiucDeviceButtonComponent,
    DeviceTypePipe,
    ToKPipe,
    DeviceRedMarkDirective,

  ],
  exports: [
    DiyButtonComponent,
    SexNamePipe,
    CurrencyFormatPipe,
    HanshengBookButtonComponent,
    HighlightDirective,
    ButtonCircleDirective,
    CurrencyHighlightDirective,
    TypeSelectPipe,
    LiucDeviceButtonComponent,
    DeviceTypePipe,
    ToKPipe,
    DeviceRedMarkDirective,
  ]
})
export class SharedModule { }
