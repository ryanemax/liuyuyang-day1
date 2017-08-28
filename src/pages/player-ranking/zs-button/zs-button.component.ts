import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-zs-button',
  templateUrl: './zs-button.component.html',
  styleUrls: ['./zs-button.component.scss']
})
export class ZsButtonComponent implements OnInit {
  @Input() title:string = "Button";
  constructor() { }

  ngOnInit() {
  }

}
