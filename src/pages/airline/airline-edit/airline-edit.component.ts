import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';

import {AirlineService} from '../airline.service'

import {MdDialog, MdDialogRef} from '@angular/material';
@Component({
  selector: 'app-airline-edit',
  templateUrl: './airline-edit.component.html',
  styleUrls: ['./airline-edit.component.scss']
})
export class AirlineEditComponent implements OnInit {
object:Airline = {
    from:"Dalian",
    price:1700, 
    to:"Shanghai",
    year:2017,
    image:"../../../assets/img/flight/dalian.jpg",
    username: "Poppy"
  }
  isNew:boolean
  constructor(
    private route: ActivatedRoute,
    private loc:Location,
    private airlineServ:AirlineService,
    public dialog: MdDialog) { 
    if(airlineServ.editObject){
      this.object = airlineServ.editObject
    }
  }
  
  save(){
    if(this.object.from==""||this.object.price<=0 ||this.object.to==""||this.object.username=="" ){
      alert("信息不完整，请检查")
      // this.dialog.open(DialogResult);
      return
    }
    if(this.isNew){
      this.airlineServ.addAirlines(this.object)
    }
    this.back()
  }
  cacel(){
    this.back() 
  }
  back(){
    this.loc.back()
  }
  ngOnInit() {
            this.route.params.subscribe(params=>{
          let name = params['price']
          if(name!=="0"){
            this.isNew = true;
          }else{
            this.airlineServ.getContactByName(name).subscribe(contact=>{
            this.object = contact
        })
      }

    })
  }

}
