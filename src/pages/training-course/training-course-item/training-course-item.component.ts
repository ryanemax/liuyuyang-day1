import { Component, OnInit,Input } from '@angular/core';
import { TrainingCourseService } from '../training-course.service'

import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';


import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-training-course-item',
  templateUrl: './training-course-item.component.html',
  styleUrls: ['./training-course-item.component.scss']
})
export class TrainingCourseItemComponent implements OnInit {
  record:CourseReload
  constructor( private service :TrainingCourseService,private route: ActivatedRoute,
    private loc:Location) {

   
  }
  
  back(){
    this.loc.back()
  }
  ngOnInit() {
    this.route.params.subscribe(params=>{
      let name = params['name']
      this.service.getRecordByName(name).subscribe(item=>{
        this.record = item
     })
    })
  }

}
