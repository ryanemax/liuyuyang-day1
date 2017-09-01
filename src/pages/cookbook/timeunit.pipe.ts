import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeunit'
})
export class TimeunitPipe implements PipeTransform {

  transform(value: any, args?: any): any {
 let lang = "cn"
    if(args){
      lang = args
    }
    let nameMap = {
      cn: {
        "H": "小时",
        "M": "分钟",
      },
      en: {
        "H": "Hours",
        "M": "Minutes",
      }
    }
      return nameMap[lang][value]
  }
}
