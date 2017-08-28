import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-liuc-device-button',
  templateUrl: './liuc-device-button.component.html',
  styleUrls: ['./liuc-device-button.component.scss']
})
export class LiucDeviceButtonComponent implements OnInit {

 @Input() title:string = "Button";

  constructor() { }

  ngOnInit() {
  }

}
