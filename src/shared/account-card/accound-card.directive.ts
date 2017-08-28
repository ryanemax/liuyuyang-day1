import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appAccoundCard]'
})
export class AccoundCardDirective {

  constructor(el:ElementRef) {
    let node = el.nativeElement
    node.style.color = "yellow"
  }

}

