import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';

import {
  Meta,
  Title
} from '@angular/platform-browser';

@Component({
  selector: 'app-device-list-page',
  templateUrl: './device-list-page.component.html',
  styleUrls: ['./device-list-page.component.scss']
})
export class DeviceListPageComponent implements OnInit {
  list:Array<any>;
  constructor(title:Title,private deviceSer:DeviceService) { 
     title.setTitle("物资管理系统");
     this.deviceSer.getSubject().subscribe(data=>{
       this.list=data;
      });
    
  }

  ngOnInit() {
  }


  asc(){
    // 正序排列
    // 数组操作API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.list.sort((a,b) => {
        if(a.name>b.name){
              return 1;
        }else{
            return -1
        }
    }
  )
}


  desc(){
     this.list.sort((a,b) => {
        if(a.name<b.name){
              return 1;
        }else{
            return -1
        }
    }
  )
  }
  random(){
    this.list.sort((a,b) => {
         return Math.random();
       
    })
    // 随机排列
    // 常用数学计算API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
  }

}
