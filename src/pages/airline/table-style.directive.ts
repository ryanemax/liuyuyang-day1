import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appTableStyle]'
})
export class TableStyleDirective {

  constructor(el:ElementRef) { 
    let node = el.nativeElement;
    node.style.color = "#4c4c4c"
    node.style.width = "70%"
    node.style.margin = "1em 0.8em"
    node.style.height = "11em"
  }
}
