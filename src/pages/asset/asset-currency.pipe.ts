import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'assetCurrency'
})
export class AssetCurrencyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args=="cn"){
     return "￥"+value
    }
    if(args=="en"){
      return "$"+value
     }
    return null;
  }

}
