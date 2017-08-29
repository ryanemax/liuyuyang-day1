import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagePipe'
})
export class ImagePipePipe implements PipeTransform {
  transform(value: any, args?: any): any {
     console.log(value);
    let vancouver="vancouver"
    if(typeof(value) !="undefined" && value !=""){
      console.log("test");
      return String(value)
    }else{
      return String(vancouver)
    }
  }

}
