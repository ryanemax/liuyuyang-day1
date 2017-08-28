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
    From:"",
    To:"",
    Price:"", 
    FareClass:""
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
    if(this.object.From==""||this.object.Price=="" ||this.object.To==""){
      alert("信息不完整，请检查")
      // this.dialog.open(DialogResult);
      return
    }
    if(this.isNew){
      this.airlineServ.addAirline(this.object).subscribe()
      console.log(this.object);
    }else{
      this.airlineServ.updateAirline(this.object)
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
          let price = params['price']
          if(price!=="0"){
            this.isNew = true;
          }else{
            this.airlineServ.getAirlineByPrice(price).subscribe(contact=>{
            this.object = contact
        })
      }

    })
  }

}
