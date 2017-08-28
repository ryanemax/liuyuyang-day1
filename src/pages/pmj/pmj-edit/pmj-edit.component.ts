import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {PmjService} from '../pmj.service'
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-pmj-edit',
  templateUrl: './pmj-edit.component.html',
  styleUrls: ['./pmj-edit.component.scss']
})
export class PmjEditComponent implements OnInit {

  object:Brand = {
    name:"",
    consumerAccount:"",
    campaignAccount:"",
    taegetAudience:"",
    averagePrize:""
  }

  isNew:boolean

  constructor(
    private route: ActivatedRoute,
    private loc:Location,
    private pmjServ:PmjService,
    public dialog: MdDialog
  ) { 
    if(pmjServ.editObject){
      this.object = pmjServ.editObject
    }
  }

  save(){
    if(this.object.name==""||this.object.taegetAudience==""||this.object.averagePrize==""){
      alert("Please Fill in All the Fields");
      // this.dialog.open(DialogResult);
      return;
    }
    console.log(this.isNew);
    if(this.isNew){
      this.pmjServ.addBrand(this.object).subscribe(data=>{
        console.log(data);
        this.back();
      });
    } else {
      this.pmjServ.updateBrand(this.object).subscribe(data=>{
        console.log(data);
        this.back();
      });
    }
  }

  back(){
    this.loc.back()
  }

  ngOnInit() {
    this.route.params.subscribe(params=>{
          // let name = params['name']
          // if(name=="new"){
          //   this.isNew = true;
          // }else{
          //   this.pmjServ.getBrandByName(name).subscribe(brand=>{
          //   this.object = brand;
          let id = params['id']
          console.log("OnInit=" + id);
          if(id=="new"){
            this.isNew = true;
          }else{
            this.pmjServ.getBrandById(id).subscribe(brand=>{
            this.object = brand;
        })
      }

    })
  }

}
