import { Component, OnInit } from '@angular/core';
import { TrainingCourseService } from '../training-course.service'

import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';


import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-training-course-edit',
  templateUrl: './training-course-edit.component.html',
  styleUrls: ['./training-course-edit.component.scss']
})
export class TrainingCourseEditComponent implements OnInit {
  record:CourseReload={
    stName:"",
    courseName:"",
    date:"",
    isOk:""
  }
  isNew:boolean
  constructor( private route: ActivatedRoute,
    private loc:Location,
  private service:TrainingCourseService,
  public dialog: MdDialog) { }

  save(){
    if(this.record.stName==""||this.record.date=="" 
      ||this.record.courseName==""){
      alert("信息不完整，请检查")
      // this.dialog.open(DialogResult);
      return
    }
    if(this.isNew){
      this.service.addRecord(this.record)
    }
    this.back()
  }
  back(){
    this.loc.back()
  }
  ngOnInit() {

    this.route.params.subscribe(params=>{
      let name = params['name']
      if( name == "new"){
        this.isNew = true;
      }else{
        this.service.getRecordByName(name).subscribe(item=>{
        this.record = item
    })
  }

})
  }

}
