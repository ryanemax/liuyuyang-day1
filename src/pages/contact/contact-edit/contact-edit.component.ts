import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';

import {ContactService} from '../contact.service'

import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {
  object:Contact = {
    
    name:"",
    mobile:"",
    sex:"",
    birth:{
      __type:"Date",
      iso: ""
    }
  }
  isNew:boolean
  constructor(
    private route: ActivatedRoute,
    private loc:Location,
  private contactServ:ContactService,
  public dialog: MdDialog) { 
    if(contactServ.editObject){
      this.object = contactServ.editObject
    }
  }
  save(){
    if(this.object.name==""||this.object.mobile==""||this.object.sex==""){
      alert("信息不完整，请检查")
      // this.dialog.open(DialogResult);
      return
    }
    if(this.isNew){
      this.contactServ.saveContact(this.object).subscribe(data=>{
        this.back()
      })
    }else{
      this.contactServ.saveContact(this.object).subscribe(data=>{
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
            this.contactServ.getContactById(id).subscribe(contact=>{
            this.object = contact
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