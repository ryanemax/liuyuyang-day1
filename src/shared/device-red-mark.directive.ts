import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appDeviceRedMark]'
})
export class DeviceRedMarkDirective {

  constructor(el:ElementRef) { 
    let node = el.nativeElement
    node.style.color = "#9c27b0";
    node.style.fontWeight = "bold";
  }

}
