import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appCurrencyHighlight]'
})
export class CurrencyHighlightDirective {

  constructor(el: ElementRef, private renderer: Renderer) {
    let node = el.nativeElement;
    // node.style.background = "yellow";
    this.renderer.setElementStyle(node, 'backgroundColor', 'yellow');
  }

}
