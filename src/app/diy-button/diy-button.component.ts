import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-diy-button',
  templateUrl: './diy-button.component.html',
  styleUrls: ['./diy-button.component.scss']
})
export class DiyButtonComponent implements OnInit {
  @Input() title:string = "Button";
  constructor() { }

  ngOnInit() {
  }

}
