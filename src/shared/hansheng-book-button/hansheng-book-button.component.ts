import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hansheng-book-button',
  templateUrl: './hansheng-book-button.component.html',
  styleUrls: ['./hansheng-book-button.component.scss']
})
export class HanshengBookButtonComponent implements OnInit {

  @Input() title:string = "Button";

  constructor() { }

  ngOnInit() {
  }

}
