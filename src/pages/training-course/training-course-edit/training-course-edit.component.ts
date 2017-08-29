import { Component, OnInit,Input } from '@angular/core';
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
    // if(this.isNew){
    //   console.log(this.record)
    //   this.service.addRecord(this.record)
    // }
    this.service.addRecord(this.record).subscribe(data=>{
      location.href = "/trainingcourse"
      // this.loc.path ( "trainingcourse")s
    })
    // this.back()
  }
  back(){
    this.loc.back()
  }
  ngOnInit() {

    this.route.params.subscribe(params=>{
      let id = params['id']
      if( id == "new"){
        this.isNew = true;
      }else{
        this.service.getRecordById(id).subscribe(item=>{
          console.log(item)
        this.record = item
    })
  }

})
  }

}
