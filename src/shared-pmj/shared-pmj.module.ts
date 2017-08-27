import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Directive
import { PmjHighlightDirective } from './pmj-highlight.directive';
import { PmjButtonDirective } from './pmj-button.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PmjHighlightDirective,
    PmjButtonDirective
  ],
  exports: [
    PmjHighlightDirective,
    PmjButtonDirective
  ]
})
export class SharedPmjModule { }
