import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appPmjHighlight]'
})
export class PmjHighlightDirective {

  constructor(el:ElementRef) {
    let node = el.nativeElement;
    node.style.background = "red"
  }

}
