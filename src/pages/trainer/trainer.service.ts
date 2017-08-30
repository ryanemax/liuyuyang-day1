import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';

import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class TrainerService {

  // HTTP Params
  authHeaders:Headers = new Headers()
  host = "http://47.92.145.25:2337/parse"
  className = "Trainer"

   trainers:Array<Trainer>;
  editObject: Trainer;
  currentIndex: number;

  constructor(private http:Http) { 
    this.authHeaders.append("X-Parse-Application-Id","dev")
    this.authHeaders.append("X-Parse-Master-Key","angulardev")
    this.authHeaders.append("Content-Type","application/json")

    // this.getTrainers();
    // this.currentIndex = this.trainers.length;
  }
  getTrainers():Observable<Array<Trainer>>{
//     this.trainers = [
//      {index:1,name:"tom",num:9527,score:100,subject:"java"},
//      {index:2,name:"jack",num:6666,score:90,subject:"angularJs"},
//      {index:3,name:"jerry",num:1234,score:95,subject:"sql"},
//      {index:4,name:"马士兵",num:4321,score:80,subject:"c"},
//      {index:5,name:"王老五",num:1102,score:70,subject:"php"}
// ];
    let url = this.host+"/classes/" + this.className
    let options = {
      headers:this.authHeaders
    }

    return this.http
    .get(url,options)
    .map(data=>data.json().results)
  }

  getTrainerById(id):Observable<Trainer>{

    let url = this.host+"/classes/" + this.className + "/" + id
    let options = {
      headers:this.authHeaders
    }

    return this.http
    .get(url,options)
    .map(data=>data.json())
  }

  getTrainerrByIndex(index): Observable<Trainer> {
    let trainer = this.trainers.find(item => item.index == index)
    return Observable.of(trainer)
  }

  fillTrainers(): Observable<Array<Trainer>> {
    let url = this.host + "/classes/" + this.className
    let options = {
      headers: this.authHeaders
    }

    this.http
      .get(url, options)
      .map(data => data.json().results).subscribe(data => {
        this.trainers = data
      })

    return this.http
      .get(url, options)
      .map(data => data.json().results)
  };

  deleteById(id){
    let url = this.host+"/classes/" + this.className + "/" + id
    let options = {
      headers:this.authHeaders
    }

    return this.http
    .delete(url,options)
    .map(data=>data.json())
  }

   asc(){
    // 正序排列
    // 数组操作API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.trainers.sort((a,b)=>{
      if(a.score>b.score){
        return 1
      }else{
        return -1
      }
    })
}

  desc(){
    // 逆序排列 
    this.trainers.sort((a,b)=>{
      if(a.score<b.score){
        return 1
      }else{
        return -1
      }
    })   
  }
  random(){
    // 随机排列
    // 常用数学计算API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
    this.trainers.sort((a, b) => {
    return Math.random() > 0.3 ? -1 : 1;
  });
  }

  // addTranier(tranier) {
  //   tranier.index = this.currentIndex + 1;
  //   this.trainers.push(tranier);
  //   this.currentIndex = tranier.index;
  // }

    addTranier(tranier){
    // this.http.post()
    let url = this.host+"/classes/" + this.className
    let options = {
      headers:this.authHeaders
    }
    
    if(tranier.objectId){
      let id = tranier.objectId
      delete tranier.createdAt
      delete tranier.updatedAt
      delete tranier.objectId
      delete tranier.ACL

      return this.http
      .put(url+"/"+id,tranier,options)
      .map(data=>data.json())
    }else{
      return this.http
      .post(url,tranier,options)
      .map(data=>data.json())
    }
  }

  // delete(trainer: Trainer) {
  //   this.trainers.forEach((item, index, arr) => {
  //     if (item.index == trainer.index) {
  //       arr.splice(index, 1)
  //     }
  //   })
  // }
}
