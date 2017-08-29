import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../trainer.service'



@Component({
  selector: 'app-trainer-list-page',
  templateUrl: './trainer-list-page.component.html',
  styleUrls: ['./trainer-list-page.component.scss']
})
export class TrainerListPageComponent implements OnInit {
  list:Array<any>;
  
  constructor(private TrainerSe:TrainerService) { 
   // this.list = this.TrainerSe.trainers;
   this.TrainerSe.getTrainers().subscribe(data=>{
      this.list = data
    })
  }

 asc(){
    // 正序排列
    // 数组操作API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.list.sort((a,b)=>{
      if(a.score>b.score){
        return 1
      }else{
        return -1
      }
    })
}

  desc(){
    // 逆序排列 
    this.list.sort((a,b)=>{
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
    this.list.sort((a, b) => {
    return Math.random() > 0.3 ? -1 : 1;
  });
  }
  delete(trainer){
    this.TrainerSe.deleteById(trainer.objectId).subscribe(data=>{
      location.href="/trainer"
    })    
  }
  ngOnInit() {
  }
}
