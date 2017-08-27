import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBtnFastMail]'
})
export class BtnFastMailDirective {
  colorPrimary:string = "rgba(0, 132, 212, 0.5)";
  colorSecondary:string = "rgba(0, 132, 212, 1)";

  constructor(el: ElementRef) {
    let node = el.nativeElement;
    node.style.height = "35px";
    node.style.width = "120px";
    node.style.color = "white";
    node.style.backgroundColor = this.colorPrimary;
    node.style.fontSize = "1em";
    node.style.border = "none";
    node.style.borderRadius = "3px";
    
    node.onmouseover = ()=>{
      node.style.backgroundColor = this.colorSecondary;
    }

    node.onmouseout = ()=>{
      node.style.backgroundColor = this.colorPrimary;
    }
   }
}
