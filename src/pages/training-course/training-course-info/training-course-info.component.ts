import { Component, OnInit } from '@angular/core';
import { TrainingCourseService } from '../training-course.service'
// import { CirButtonComponent } from '../cir-button/cir-button.component'

@Component({
  selector: 'app-training-course-info',
  templateUrl: './training-course-info.component.html',
  styleUrls: ['./training-course-info.component.scss']
})
export class TrainingCourseInfoComponent implements OnInit {
  courses:Array<any>;
  
  constructor(private service:TrainingCourseService ) { 
    this.courses = this.service.courses;
  }
  doDel(name){
    this.service.delete(name)
  }
  sortByRadom()
  {
    this.service.sortByRadom()
  }
  doAsc(){
    this.service.sortByAsc()
  }
  doDesc(){
    this.service.sortByDesc()
  }
  doRandom(){
    this.service.sortByRadom()
  }
  sortByAsc2No(name){
    this.service.sortByAsc2No(name)
  }
  ngOnInit() {
  }



}
