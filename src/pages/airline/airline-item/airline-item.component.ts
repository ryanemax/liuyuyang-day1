import { Component, OnInit, Input } from '@angular/core';
import { AirlineService } from "../airline.service"
import { Location } from "@angular/common"

@Component({
  selector: 'app-airline-item',
  templateUrl: './airline-item.component.html',
  styleUrls: ['./airline-item.component.scss']
})
export class AirlineItemComponent implements OnInit {

  @Input() user:any

  constructor(private airlineServ:AirlineService,
  private loc:Location) { }
  delete(user){
    this.airlineServ.deleteByPrice(user.Price)
  }
  edit(){
    this.airlineServ.editObject = this.user
    // this.loc.go("/contact/edit")
    // location.href = "/contact/edit"
  }

  ngOnInit() {
  }

}
