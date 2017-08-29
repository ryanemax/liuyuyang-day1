import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagePipe'
})
export class ImagePipePipe implements PipeTransform {
  transform(value: string, args?: any): any {
    // if(value.search(/./g)!=-1){      
    //   return value;
    // }
    console.log(value)
    if(typeof(value) =="undefined" || value ==""){
      //  return `./assets/img/flight/${value}.jpg`;
      return `./assets/img/flight/vancouver.jpg`;
    }
    console.log(value.search(/[A-Z]/g)==-1)
    if(value.search(/[A-Z]/g)==-1){
      return `./assets/img/flight/${value}.jpg`;
    }



  }

}
