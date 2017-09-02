import { Component, OnInit } from '@angular/core';
import { AirlineService } from "../airline.service"
@Component({
  selector: 'app-airline-visit',
  templateUrl: './airline-visit.component.html',
  styleUrls: ['./airline-visit.component.scss']
})
export class AirlineVisitComponent implements OnInit {
  flightList: Array<Airline>;
  constructor(private aService: AirlineService) { }

  ngOnInit() {
      this.aService.getAirlines().subscribe(data => {
      this.aService.flightList = data;
      this.flightList = this.aService.flightList;
    });
  }

}
