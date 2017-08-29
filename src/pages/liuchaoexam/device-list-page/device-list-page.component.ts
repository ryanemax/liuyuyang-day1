import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';
import {DataSource} from '@angular/cdk';

@Component({
  selector: 'app-device-list-page',
  templateUrl: './device-list-page.component.html',
  styleUrls: ['./device-list-page.component.scss']
})
export class DeviceListPageComponent implements OnInit {
  list:Array<any>;
  constructor(private deviceSer:DeviceService) { 
     this.deviceSer.getDevices().subscribe(
     data=>{this.list=data}
   );
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
