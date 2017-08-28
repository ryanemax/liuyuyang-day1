import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-jianglun-book-button',
  templateUrl: './jianglun-book-button.component.html',
  styleUrls: ['./jianglun-book-button.component.scss']
})
export class JianglunBookButtonComponent implements OnInit {
  @Input() title:string = "Button";
  constructor() { }

  ngOnInit() {
  }

}
