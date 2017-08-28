import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';


@Injectable()
export class DeviceService {
 devices:Array<DeviceInfo>;
 editObject:DeviceInfo;
 constructor() {
   this.getDevices()
  }

getDevices(){
     this.devices = [
      {id:"z100",name:"温度传感器",type:"C",factory:"丹东电子设备",price:80},
      {id:"z101",name:"压力传感器",type:"C",factory:"辽阳电子设备",price:80},
      {id:"z102",name:"PLC",type:"W",factory:"朝阳电子设备",price:80},
      {id:"z103",name:"传感器",type:"W",factory:"大连电子设备",price:80},
      {id:"z104",name:"传感器",type:"W",factory:"丹东电子设备",price:80},
      {id:"z105",name:"传感器",type:"C",factory:"丹东电子设备",price:80},
      {id:"z106",name:"传感器",type:"C",factory:"丹东电子设备",price:80}
    ]
    
  }

  addDevice(){
    let newDev = {id:"z108",name:"传感器",type:"C",factory:"丹东电子设备",price:80};
    this.devices.push(newDev)
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
  this.devices.push(dev);
}

getContactByName(name):Observable<DeviceInfo>{
    let dev = this.devices.find(item=>item.name == name)
    return Observable.of(dev)
  }

}
