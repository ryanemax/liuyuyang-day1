import { Injectable } from '@angular/core';

import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
@Injectable()
export class TrainerService {

  trainers:Array<Trainer>;
  editObject: Trainer;
  currentIndex: number;

  constructor() { 
    this.getTrainers();
    this.currentIndex = this.trainers.length;
  }
  getTrainers(){
    this.trainers = [
     {index:1,name:"tom",num:9527,score:100,subject:"java"},
     {index:2,name:"jack",num:6666,score:90,subject:"angularJs"},
     {index:3,name:"jerry",num:1234,score:95,subject:"sql"},
     {index:4,name:"马士兵",num:4321,score:80,subject:"c"},
     {index:5,name:"王老五",num:1102,score:70,subject:"php"}
];
  }

  getTrainerrByIndex(index): Observable<Trainer> {
    let trainer = this.trainers.find(item => item.index == index)
    return Observable.of(trainer)
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

  addTranier(tranier) {
    tranier.index = this.currentIndex + 1;
    this.trainers.push(tranier);
    this.currentIndex = tranier.index;
  }

  delete(trainer: Trainer) {
    this.trainers.forEach((item, index, arr) => {
      if (item.index == trainer.index) {
        arr.splice(index, 1)
      }
    })
  }
}
