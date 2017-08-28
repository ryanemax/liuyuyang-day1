import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toK'
})
export class ToKPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value||value==0){
      return String(value)
    }
    if(value>999999){
      return String((value/1000000).toFixed(1)) + "m";
    }else if(value>999){
      return String((value/1000).toFixed(1)) + "k";
    }
      return String(value)
  }

}
