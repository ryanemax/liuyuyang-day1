import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';

import {AirlineService} from '../airline.service'

import {MdDialog, MdDialogRef} from '@angular/material';
import {MdDatepickerModule} from '@angular/material';
@Component({
  selector: 'app-airline-edit',
  templateUrl: './airline-edit.component.html',
  styleUrls: ['./airline-edit.component.scss']
})
export class AirlineEditComponent implements OnInit {
object:Airline = {
    from:"",
    to:"",
    price: 0, 
    fareClass:""
  }
  isNew:boolean
  constructor(
    private route: ActivatedRoute,
    private loc:Location,
    private airlineServ:AirlineService,
    public dialog: MdDialog) { 
  }
  
  save(){
    // if(this.object.from==""||this.object.to==""){
    //   alert("信息不完整，请检查")
    //   // this.dialog.open(DialogResult);
    //   return
    // }
    if(this.isNew){
      this.airlineServ.saveAirline(this.object).subscribe(data=>{
        this.back()
      })
    }else{
      this.airlineServ.saveAirline(this.object).subscribe(data=>{
        this.back()
      })
    }
  }
  cacel(){
    this.back() 
  }
  back(){
    this.loc.back()
  }
  ngOnInit() {
          this.route.params.subscribe(params=>{
          let id = params['id']
          if(id == "new"){
            this.isNew = true;
          }else{
            this.airlineServ.getAirlineByPrice(id).subscribe(data=>{
            this.object = data
        })
      }

    })
  }

}
