import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';


@Injectable()
export class DeviceService {
 devices:Array<DeviceInfo>;
 editObject:DeviceInfo;
 url="http://47.92.145.25:2337/parse/classes/DeviceInfo";
 deviceH:Headers =new Headers();

 constructor(private http:Http) {
   
   this.deviceH.append("X-Parse-Application-Id","dev");
   this.deviceH.append("X-Parse-REST-API-Key","angulardev");
   this.deviceH.append("Content-Type","application/json")
  //  this.getDevices().subscribe(data=>{
  //    console.log(data);
  //   })

  }

getDevices():Observable<Array<DeviceInfo>>{
   let options = {
      headers:this.deviceH
    }
   return this.http
   .get(this.url,options)
   .map(data=>data.json().results)
    
  }

  asc(){
    // 正序排列
    // 数组操作API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.devices.sort((a,b) => {
        if(a.name>b.name){
              return 1;
        }else{
            return -1
        }
    }
  )
}


  desc(){
     this.devices.sort((a,b) => {
        if(a.name<b.name){
              return 1;
        }else{
            return -1
        }
    }
  )
  }
  random(){
    this.devices.sort((a,b) => {
         return Math.random();
       
    })
    // 随机排列
    // 常用数学计算API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
  }

  deleteByName(name){
    this.devices.forEach((item,index,arr)=>{
      if(item.name == name){
        arr.splice(index,1)
      }
    })
  }

addDeviceInfo(dev){
  let options = {
      headers:this.deviceH
    }
  let urlNew=this.url+"/"+dev.objectId;
  if(dev.objectId){
    console.log(dev.objectId);
      return this.http
     .put(this.url,dev,options);
  }else{
      return this.http
      .post(this.url,dev,options);
      
  }
  
}

getContactByName(name):Observable<DeviceInfo>{
    let dev = this.devices.find(item=>item.name == name)
    return Observable.of(dev)
  }

}
