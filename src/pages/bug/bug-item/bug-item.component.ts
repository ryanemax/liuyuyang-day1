import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bug-item',
  templateUrl: './bug-item.component.html',
  styleUrls: ['./bug-item.component.scss']
})
export class BugItemComponent implements OnInit {
  @Input() bugs:any
  constructor() { }

  ngOnInit() {
  }

}
