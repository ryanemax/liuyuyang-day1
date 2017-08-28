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
    this.list = this.TrainerSe.trainers;
  }

  asc(){
    this.TrainerSe.asc()
  }
  desc(){
    this.TrainerSe.desc()
  }
  random(){
    this.TrainerSe.random()
  }
    delete(trainer){
    this.TrainerSe.delete(trainer)
  }
  ngOnInit() {
  }
}
