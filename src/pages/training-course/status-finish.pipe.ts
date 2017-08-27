import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusFinish'
})
export class StatusFinishPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let mapObject ={
      "en":{
        "Ok":"finish",
        "Ng":"unfinish"
      },
      "cn":{
        "Ok":"完成",
        "Ng":"未完成"
      }
    }
    let lang ="cn"
    if(args){
      lang = args
    }
    return mapObject[lang][value];
  }

}
