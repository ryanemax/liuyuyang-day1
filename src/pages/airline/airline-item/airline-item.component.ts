import { Component, OnInit, Input } from '@angular/core';
import { AirlineService } from "../airline.service"
import { Location } from "@angular/common"

@Component({
  selector: 'app-airline-item',
  templateUrl: './airline-item.component.html',
  styleUrls: ['./airline-item.component.scss']
})
export class AirlineItemComponent implements OnInit {

  @Input() flightdt:any
  constructor(private airlineServ:AirlineService,
  private loc:Location) { }
  delete(flightdt){
    this.airlineServ.deleteByPrice(flightdt.objectId).subscribe(data=>{
    location.href = "/flight"
    })
  }
  edit(){
    this.airlineServ.editObject = this.flightdt
    this.flightdt.visitNumber++;
    this.airlineServ.saveAirline(this.flightdt).subscribe(data=>{
    })
    console.log("vistor:" + this.flightdt.visitNumber)
    // this.loc.go("/contact/edit")
    // location.href = "/contact/edit"
  }

  ngOnInit() {
  }

}
