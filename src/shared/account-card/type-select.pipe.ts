import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeSelect'
})
export class TypeSelectPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let type = "cost"
    if(args){
      type = args
    }
    let nameMap = {
        "cost": "shoutu",
        "income": "支出",
    }
      return nameMap[type]
  }
  
}
