import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-cir-button',
  templateUrl: './cir-button.component.html',
  styleUrls: ['./cir-button.component.scss']
})
export class CirButtonComponent implements OnInit {
  @Input() name:string = "点我"
  constructor() { 
  }

  ngOnInit() {
  }

}
