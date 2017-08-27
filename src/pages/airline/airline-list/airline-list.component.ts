import { Component, OnInit} from '@angular/core';
import { AirlineService } from "../airline.service"

@Component({
  selector: 'app-airline-list',
  templateUrl: './airline-list.component.html',
  styleUrls: ['./airline-list.component.scss']
})
export class AirlineListComponent implements OnInit {
  title:string="Welcome to Flight Airline!";
  add:string="Add";
  Asc:string="asc";
  Desc:string="desc";
  Random:string="random";
  list:Array<any>;
   constructor(private airlineServ:AirlineService) {
    this.list = this.airlineServ.airlines
  }

  asc(){
    this.airlineServ.asc()
  }
  desc(){
    this.airlineServ.desc()
  }
  random(){
    this.airlineServ.random()
  }
  ngOnInit() {
  }
}
