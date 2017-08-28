import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BugService } from "../bug.service"

@Component({
  selector: 'app-bug-detail-page',
  templateUrl: './bug-detail-page.component.html',
  styleUrls: ['./bug-detail-page.component.scss']
})
export class BugDetailPageComponent implements OnInit {

  bug: Bug = { index: "", level: "", status: "", assigneeName: "" };

  constructor(private route: ActivatedRoute, private bugService: BugService) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      let objectId = params.objectId;
      this.bugService.getBug(objectId).subscribe(data => {
        this.bug = data;
      });
    })
  }

}
