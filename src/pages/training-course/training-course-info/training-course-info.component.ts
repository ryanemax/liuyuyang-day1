import { Component, OnInit } from '@angular/core';


interface CourseReload{
  stName:string,
  courseName:string,
  date:string,
  isOk:string,
  random?:number
}
@Component({
  selector: 'app-training-course-info',
  templateUrl: './training-course-info.component.html',
  styleUrls: ['./training-course-info.component.scss']
})
export class TrainingCourseInfoComponent implements OnInit {

  
  courses:Array<CourseReload> ;
  constructor() {

    this.courses=[
      {
        stName: '小张',courseName:'日语', date: '2017/07/02',isOk:'Ok'
      },{
        stName: '小王',courseName:'法语', date: '2017/08/02',isOk:'Ok'
      },{
        stName: '小丽',courseName:'德语', date: '2017/07/12',isOk:'Ok'
      },{
        stName: '大宝',courseName:'英语', date: '2017/08/23',isOk:'Ng'
      },{
        stName: 'gene.wang',courseName:'angularjs2开发', date: '2017/07/18',isOk:'Ok'
      },{
        stName: 'jeff.li',courseName:'java基础', date: '2017/08/19',isOk:'Ok'
      },{
        stName: '小张',courseName:'日语', date: '2017/08/26',isOk:'Ng'
      }
    ];
}
add(){
  this.courses.push(
    {
      stName: '小张',courseName:'日语', date: '2017/08/26',isOk:'Ng'
    }
  );
}
sortByAsc2No(no){
  console.log(no);
  this.courses.sort((a:CourseReload,b:CourseReload)=>{
    console.log(no);
    var a1,b1;
    if (no =="1"){
      a1 = a.stName;
      b1 = b.stName;
    } else if (no =="4"){
      a1 = a.isOk;
      b1 = b.isOk;
    }else if (no =="2"){
      a1 = a.courseName;
      b1 = b.courseName;
    } else if (no =="3"){
      a1 = a.date;
      b1 = b.date;
    } 
    // var a1 = a[no];
    // var b1 = b[no];

    if (a1> b1){
      return 1;
    } else {
      return -1;
    }
  })
}

sortByAsc(){
  this.courses.sort((a:CourseReload,b:CourseReload)=>{
    if (a.date > b.date){
      return 1;
    } else {
      return -1;
    }
  })
}

sortByDesc(){
  this.courses.sort((a:CourseReload,b:CourseReload)=>{
    if (a.date > b.date){
      return -11;
    } else {
      return 1;
    }
  })
}
sortByRadom(){
  this.courses.forEach((item)=>{
    item.random = (Math.random()*10)%10;
  })

  this.courses.sort((a:CourseReload,b:CourseReload)=>{
    if (a.random > b.random){
      return 1;
    } else {
      return -1;
    }
  })
}




ngOnInit() {
}



}
