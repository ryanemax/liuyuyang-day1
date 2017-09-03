import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appJenniferFont]'
})
export class JenniferFontDirective {

  constructor(el:ElementRef) { 
    let node = el.nativeElement;
      node.style.fontFamily="微软雅黑"
      node.style.color="#FFA500"



  }

}
