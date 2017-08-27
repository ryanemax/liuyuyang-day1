import { Component, OnInit } from '@angular/core';
import { BugService } from "../bug.service"

@Component({
  selector: 'app-bug-list-page',
  templateUrl: './bug-list-page.component.html',
  styleUrls: ['./bug-list-page.component.scss']
})
export class BugListPageComponent implements OnInit {

  bugs: Array<any>;

  constructor(private bugService: BugService) {
    this.bugs = this.bugService.getBugs();
  }

  addBug() {
    this.bugService.addBug(this.bugs);
  }

  sortList(type: string) {
    this.bugService.sortList(type, this.bugs);
  }

  ngOnInit() {
  }

}
