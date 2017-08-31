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
    this.deviceSer.asc()
  }
  desc(){
    this.deviceSer.desc()
  }
  random(){
    this.deviceSer.random()
  }


}
