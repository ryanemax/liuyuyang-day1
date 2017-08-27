import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appAssetButton]'
})
export class AssetButtonDirective {
  // ElementRef对象参考 https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement
  // ElementRef.style参考 https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement
  constructor(el:ElementRef) {
    let node = el.nativeElement
    node.style.marginBottom="10px"
    node.style.height="30px"
    node.style.width="70px"
    node.style.borderWidth="1px"
    node.style.backgroundColor="white"
    node.style.borderStyle="solid"
   }

}
