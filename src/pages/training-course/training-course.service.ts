import { Injectable } from '@angular/core';

import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map'
import { HttpModule,Headers,Http } from '@angular/http';

const APPLICATION_ID:string = "dev"
const MASTER_KEY = "angulardev"
 const SERVER_URL="http://dev.futurestack.cn:80/parse/classes/";
//const SERVER_URL="http://localhost:1337/parse/classes/";

const CONTENT_TYPE = "application/json"
const CLASSNAME = "TrainingCourse"
@Injectable()
export class TrainingCourseService {
  authHeader:Headers = new Headers()
  courses:Array<CourseReload> =[];
  constructor(private http:Http) {
    this.authHeader.append("X-Parse-Application-Id",APPLICATION_ID)
    this.authHeader.append("Content-Type",CONTENT_TYPE)
    this.authHeader.append("X-Parse-Master-Key",MASTER_KEY)
   // this.http.options(SERVER_URL,{headers:this.authHeader})

  }
delete(name){
  let url = SERVER_URL+CLASSNAME
  let options = {headers:this.authHeader}
  return this.http.delete(url + "/" + name,options).map(data => data.json)

  // this.courses.forEach((item,index,arr)=>{
  //   if(item.stName == name){
  //     arr.splice(index,1)
  //   }
  // })
}

getRecordById(id):Observable<CourseReload>{
  let url = SERVER_URL+CLASSNAME
  let options = {headers:this.authHeader}
  return this.http.get(url + "/"+id,options).map(data=>data.json())

  // let record = this.courses.find(item=>item.stName == name)
  // return Observable.of(record)
}

getRecordByName(name):Observable<CourseReload>{
  let record = this.courses.find(item=>item.stName == name)
  return Observable.of(record)
}


addRecord(record):Observable<CourseReload>{
  let url = SERVER_URL+CLASSNAME
  let options = {headers:this.authHeader}

  if (record.objectId){
 

    let id = record.objectId
    delete record.createdAt
    delete record.updatedAt
    delete record.objectId
    delete record.ACL

    return this.http
    .put(url+"/"+id,record,options)
    .map(data=>data.json())
  } else {
    return this.http
    .post(url,record,options)
    .map(data=>data.json())
  }


  // return this.http.post(url,record,{headers:this.authHeader}).map(data => data)
  // this.courses.push(record)
}
getContent():Observable<Array<CourseReload>>{
  
  let url = SERVER_URL+CLASSNAME
  let temp = this.http.get(url,{headers:this.authHeader}).map(data=>data.json().results)
  temp.subscribe(data=>{
    console.log("service subscribe")
    this.courses =data
    console.log("service data")
    console.log(this.courses)
  })
  
  return temp
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
  console.log(this.courses)
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
