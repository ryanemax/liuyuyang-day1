import { Component, OnInit ,Input} from '@angular/core';
import { DeviceService } from '../device.service';


@Component({
  selector: 'app-device-item',
  templateUrl: './device-item.component.html',
  styleUrls: ['./device-item.component.scss']
})
export class DeviceItemComponent implements OnInit {
  @Input() device:any
  constructor(private deviceSer:DeviceService) { }

  ngOnInit() {
  }

   delete(device){
    this.deviceSer.deleteById(this.device.objectId).subscribe(data=>{
      
    });
  }
  edit(){
    this.deviceSer.editObject=this.device;
  }
}
