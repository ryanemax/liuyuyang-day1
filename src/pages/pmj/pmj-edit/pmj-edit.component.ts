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
    consumerAccount:0,
    campaignAccount:0,
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
    if(this.isNew){
      this.pmjServ.addBrand(this.object);
    }
    this.back()
  }

  back(){
    this.loc.back()
  }

  ngOnInit() {
    this.route.params.subscribe(params=>{
          let name = params['name']
          if(name=="new"){
            this.isNew = true;
          }else{
            this.pmjServ.getBrandByName(name).subscribe(brand=>{
            this.object = brand;
        })
      }

    })
  }

}
