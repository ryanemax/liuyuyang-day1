import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';

import {CookbookService} from '../cookbook.service'

import {MdDialog, MdDialogRef} from '@angular/material';

// 在项目里面找到八个构造块

@Component({
  selector: 'app-cookbook-edit',
  templateUrl: './cookbook-edit.component.html',
  styleUrls: ['./cookbook-edit.component.scss']
})
export class CookbookEditComponent implements OnInit {

    object:Cookbook = {
    id:"",
    cookingname:"",
    material:"",
    cooktime: 0,
  }

 isNew:boolean
  constructor(
    private route: ActivatedRoute,
    private loc:Location,
  private cookbookServ:CookbookService,
  public dialog: MdDialog) { 
    if(cookbookServ.editObject){
      this.object = cookbookServ.editObject
    }
  }
  
  save(){
    if(this.object.cookingname==""||this.object.material==""||this.object.cooktime==0){
      alert("信息不完整，请检查")
      // this.dialog.open(DialogResult);
      return
    }
    if(this.isNew){
      this.cookbookServ.saveCookbook(this.object).subscribe(data=>{
        this.back()
      })
    }else{
      this.cookbookServ.saveCookbook(this.object).subscribe(data=>{
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
            this.cookbookServ.getCookbookById(id).subscribe(cookbook=>{
            this.object = cookbook
        })
      }

    })
  }

}




