import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appPmjButton]'
})
export class PmjButtonDirective {
  // ElementRef对象参考 https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement
  // ElementRef.style参考 https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement
  constructor(el:ElementRef) { 
    let node = el.nativeElement;
    node.style.border = "none"
    node.style.color = "#FFF"
    node.style.background = "#607d8b"
    node.style.borderRadius = "34px"
    node.style.padding = "8px"
  }

}
