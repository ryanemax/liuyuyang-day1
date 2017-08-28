
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { BetsyAccountService } from "../betsy-account.service"

import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.scss']
})
export class AccountEditComponent implements OnInit {
  object: Account = {
    event:"",
    type:"",
    date: "",
  }
  isNew:boolean
  constructor(
    private route: ActivatedRoute,
    private loc:Location,
   private accountServ:BetsyAccountService,
   public dialog: MdDialog) { 
    if(accountServ.editObject){
      this.object = accountServ.editObject
    }
  }
  
  save(){
    if(this.object.name==""||this.object.type==""||this.object.date==""){
      alert("信息不完整，请检查")
      // this.dialog.open(DialogResult);
      return
    }
    if(this.isNew){
      this.accountServ.addAccount(this.object)
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
            this.accountServ.getAccountByName(name).subscribe(account=>{
            this.object = account
        })
      }

    })
  }

}

// @Component({
//   selector: 'dialog-result',
//   template: `
//   信息填写不完整，请检查
//   `,
// })
// export class DialogResult {
//   constructor(public dialogRef: MdDialogRef<DialogResult>) {}
// }