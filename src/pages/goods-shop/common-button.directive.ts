import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appCommonButton]'
})
export class CommonButtonDirective {

  constructor(el:ElementRef) { 
    let node = el.nativeElement
    node.style.background = "#00bcd4"
    node.style.borderRadius = "5px"
    node.style.fontSize = "16px"
  }

}
