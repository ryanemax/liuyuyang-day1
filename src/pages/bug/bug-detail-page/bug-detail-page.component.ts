import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { BugService } from "../bug.service"

@Component({
  selector: 'app-bug-detail-page',
  templateUrl: './bug-detail-page.component.html',
  styleUrls: ['./bug-detail-page.component.scss']
})
export class BugDetailPageComponent implements OnInit {

  bug: Bug = { index: "", level: "", status: "", assigneeName: "" };

  constructor(private route: ActivatedRoute, private loc: Location, private bugService: BugService) {

  }

  save(bug: Bug) {
    this.bugService.saveBug(bug).subscribe(() => {
      this.loc.back();
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let objectId = params.objectId;
      if (!objectId) {
        return;
      }
      this.bugService.getBug(objectId).subscribe(data => {
        this.bug = data;
      });
    })
  }

}
