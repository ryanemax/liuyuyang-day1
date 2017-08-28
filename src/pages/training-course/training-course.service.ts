import { Injectable } from '@angular/core';

import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map'
import { HttpModule,Headers,Http } from '@angular/http';

const APPLICATION_ID:string = "dev"
const SERVER_URL="";

@Injectable()
export class TrainingCourseService {

  courses:Array<CourseReload> ;
  constructor(private http:Http) {

    // this.getContent()
  }
delete(name){
  this.courses.forEach((item,index,arr)=>{
    if(item.stName == name){
      arr.splice(index,1)
    }
  })
}
getRecordByName(name):Observable<CourseReload>{
  let record = this.courses.find(item=>item.stName == name)
  return Observable.of(record)
}


addRecord(record){
  this.courses.push(record)
}
getContent():Observable<Array<CourseReload>>{
  
  let header:Headers = new Headers()
  header.append("X-Parse-Application-Id","dev")

  let host = "";
  let classes = ""
  let url = `{{host}}{{classes}}`;
  this.http.get(url,{}).map(item => item).subscribe(
    item => item.json
  )


  let courses:Array<CourseReload> = 
  [
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
  return Observable.of(courses);
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
}
