import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';

import {SnackService} from '../snack.service'

import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-edit-merchant-page',
  templateUrl: './edit-merchant-page.component.html',
  styleUrls: ['./edit-merchant-page.component.scss']
})
export class EditMerchantPageComponent implements OnInit {
  object:Message ={
    name:"",
    mobile:"",
    local:""
  }
  isNew:boolean
  constructor(
    private route: ActivatedRoute,
    private loc:Location,
    private snackService:SnackService,
    public dialog: MdDialog) {
      if(snackService.editObject){
        this.object = snackService.editObject
      }
  }

  save(){
    if(this.object.name==""||this.object.mobile==""||this.object.local==""){
      alert("信息不完整，请检查")

      return
    }
    if(this.isNew){
      this.snackService.saveMessage(this.object).subscribe(data=>{
        this.back()
      })
    }else{
      this.snackService.saveMessage(this.object).subscribe(data=>{
        this.back()
      })
    }
  }
  back(){
    this.loc.back()
  }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      let id = params['id']
      if(id=="new"){
        this.isNew = true;
      }else{
        this.snackService.getMessageById(id).subscribe(message=>{
        this.object = message
    })
  }

})
  }

}
