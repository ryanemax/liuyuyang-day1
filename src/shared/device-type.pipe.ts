import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deviceType'
})
export class DeviceTypePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let devtype = "C"
    if(args){
      devtype = args
    }
    let typeMap = {
      "C":"部件",
      "W":"整件"
    }
      return typeMap[devtype];
  }

}
