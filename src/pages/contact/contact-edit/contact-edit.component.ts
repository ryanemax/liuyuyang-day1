import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';

import {ContactService} from '../contact.service'

import {MatDialog, MatDialogRef} from '@angular/material';

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
  public dialog: MatDialog) { 
    if(contactServ.editObject){
      this.object = contactServ.editObject
    }
  }
  save(){
    if(this.object.name==""||this.object.mobile==""||this.object.sex==""){
      this.dialog.open(DialogResult);
      return
    }

      this.contactServ.saveContact(this.object).subscribe(data=>{
        this.back()
        this.contactServ.refresh()
      })
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

@Component({
  selector: 'dialog-result',
  template: `
  信息填写不完整，请检查
  `,
})
export class DialogResult {
  constructor(public dialogRef: MatDialogRef<DialogResult>) {}
}