import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appPmjButton]'
})
export class PmjButtonDirective {
  // ElementRef对象参考 https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement
  // ElementRef.style参考 https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement
  constructor(el:ElementRef) { 
    let node = el.nativeElement;
    node.style.border = "none";
    node.style.color = "#FFF";
    node.style.background = "#607d8b";
    node.style.borderRadius = "8px";
    node.style.padding = "10px";
    node.style.boxShadow = "0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12)";
  }

}
