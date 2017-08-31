import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';


@Injectable()
export class DeviceService {
 devices:Array<DeviceInfo>;
 editObject:DeviceInfo;
 url="http://47.92.145.25:2337/parse/classes/DeviceInfo";
 deviceH:Headers =new Headers();
 datachange:BehaviorSubject<DeviceInfo[]> = new BehaviorSubject<any[]>([]);
 constructor(private http:Http) {
   
   this.deviceH.append("X-Parse-Application-Id","dev");
   this.deviceH.append("X-Parse-REST-API-Key","angulardev");
   this.deviceH.append("Content-Type","application/json")
   this.refresh();

  }

getDevices():Observable<Array<DeviceInfo>>{
   let options = {
      headers:this.deviceH
    }
   return this.http
   .get(this.url,options)
   .map(data=>data.json().results)
    
  }

  deleteById(id){
    let options = {
      headers:this.deviceH
    }
    let urlDel=this.url+"/"+id;
    return this.http.delete(urlDel,options)
    .map(data=>data.json());
  }

addDeviceInfo(dev){
  let options = {
      headers:this.deviceH
    }
  
 let urlNew="http://47.92.145.25:2337/parse/classes/DeviceInfo"

  if(dev.objectId){
      let id = dev.objectId
      delete dev.createdAt
      delete dev.updatedAt
      delete dev.objectId
      delete dev.ACL
      
      return this.http
     .put(urlNew+"/"+id,dev,options)
     .map(data=>data.json())
  }else{
      return this.http
      .post(urlNew,dev,options)
      .map(data=>data.json())
  }
  
}

// getDeviceInfoByName(name):Observable<DeviceInfo>{
//     let dev = this.devices.find(item=>item.name == name)
//     return Observable.of(dev)
// }

getDeviceInfoById(id):Observable<DeviceInfo>{
    let options = {
      headers:this.deviceH
    }
  let url=this.url+"/"+id;
    return this.http
    .get(url,options)
    .map(data=>data.json());
}

refresh(){
      this.getDevices().subscribe(data=>{
      this.datachange.next(data);
      });
}

getSubject(){
      return this.datachange;
}

}
