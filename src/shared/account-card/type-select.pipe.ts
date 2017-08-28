import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeSelect'
})
export class TypeSelectPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
