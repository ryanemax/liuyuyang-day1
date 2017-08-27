import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexName'
})
export class SexNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let lang = "cn"
    if(args){
      lang = args
    }
    let nameMap = {
      cn: {
        "M": "男",
        "F": "女",
      },
      en: {
        "M": "Male",
        "F": "Female",
      }
    }
      return nameMap[lang][value]
  }

}
