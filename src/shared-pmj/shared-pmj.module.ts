import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Directive
import { PmjHighlightDirective } from './pmj-highlight.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PmjHighlightDirective,
  ],
  exports: [
    PmjHighlightDirective,
  ]
})
export class SharedPmjModule { }
