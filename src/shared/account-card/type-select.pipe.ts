import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeSelect'
})
export class TypeSelectPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let type = ""
    if(value){
      type = value
    }
    let nameMap = {
        "Traffic": "traffic",
        "Cosmetics":"cosmetics",
        "Dress": "dress",
        "Meal": "meal",
        "Social": "social",
    }
      return nameMap[type]
  }
  
}
