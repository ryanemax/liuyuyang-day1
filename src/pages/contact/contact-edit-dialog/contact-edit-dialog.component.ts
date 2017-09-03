import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service'

import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-contact-edit-dialog',
  templateUrl: './contact-edit-dialog.component.html',
  styleUrls: ['./contact-edit-dialog.component.scss']
})
export class ContactEditDialogComponent implements OnInit {
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
  constructor(private contactServ:ContactService,public dialogRef: MdDialogRef<ContactEditDialogComponent>) {
    if(contactServ.editObject){
      this.object = contactServ.editObject
    }else{
      this.isNew = true;   
    }
  }

  save(){
    if(this.object.name==""||this.object.mobile==""||this.object.sex==""){
      // this.dialog.open(DialogResult);
      return
    }

      this.contactServ.saveContact(this.object).subscribe(data=>{
        this.close()
        this.contactServ.refresh()
      })
  }
  close(){
    this.dialogRef.close()
  }
  ngOnInit() {
  }


}
