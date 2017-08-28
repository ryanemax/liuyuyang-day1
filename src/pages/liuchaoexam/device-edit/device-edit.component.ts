import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-device-edit',
  templateUrl: './device-edit.component.html',
  styleUrls: ['./device-edit.component.scss']
})
export class DeviceEditComponent implements OnInit {

object:DeviceInfo = {
    deviceId:"",
    type:"",
    name:"",
    factory:"",
    price:0
  }
  isNew:boolean

  constructor( 
    private deviceSer:DeviceService,
    private route: ActivatedRoute,
    private loc:Location
  ) { }

  ngOnInit() {
      this.route.params.subscribe(params=>{
          let name = params['name']
          if(name=="new"){
            this.isNew = true;
          }else{
            this.deviceSer.getContactByName(name).subscribe(device=>{
            this.object = device
        })
      }

    })
  }

  save(){
    if(this.object.name==""||this.object.deviceId==""){
      alert("信息不完整，请检查")
      // this.dialog.open(DialogResult);
      return
    }
    this.deviceSer.addDeviceInfo(this.object);
   
    this.back()
  }
 
  back(){
    this.loc.back()
  }

}
