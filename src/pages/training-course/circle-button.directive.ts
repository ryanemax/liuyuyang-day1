import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCircleButton]'
})
export class CircleButtonDirective {

  constructor(private el:ElementRef) {
    let node = el.nativeElement
    node.style.border = "none"
    node.style.color = "grey"
    node.style.background = "yellow"
    node.style.borderRadius = "34px"
    // node.innerHTML = "666"
    node.onmousemove =function(){
      this.style.color="red";
    }
    node.onmouseout =function(){
      this.style.color="grey";
    }
   }

}
