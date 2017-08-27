import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let msg = value;
    let m = 1000000;
    let k = 1000;
    let scale = 1;
    if (value > m) {
      msg = (value / m).toFixed(scale) + "M";
    } else if (value > k) {
      msg = (value / k).toFixed(scale) + "K";
    }
    return msg;
  }

}
