import { Component, OnInit, Input } from '@angular/core';
import { BugService } from "../bug.service"

@Component({
  selector: 'app-bug-item',
  templateUrl: './bug-item.component.html',
  styleUrls: ['./bug-item.component.scss']
})
export class BugItemComponent implements OnInit {
  @Input() bugs: any
  constructor(private bugService: BugService) { }

  delete(index: string) {
    this.bugService.delete(index, this.bugs);
  }

  ngOnInit() {
  }

}
