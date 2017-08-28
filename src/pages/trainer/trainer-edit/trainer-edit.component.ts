import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../trainer.service'
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-trainer-edit',
  templateUrl: './trainer-edit.component.html',
  styleUrls: ['./trainer-edit.component.scss']
})
export class TrainerEditComponent implements OnInit {
 object:Trainer = {
   index: 0,
   num:0,
   name:"",
   score:0,
   subject:""
  }
  isNew:boolean
  constructor(
    private route: ActivatedRoute,
    private loc:Location,
    private trainServ:TrainerService,
    public dialog: MdDialog)
   {
     if(trainServ.editObject){
      this.object = trainServ.editObject
    }
  }

  save() {
    if (this.object.name == "" || this.object.score == 0 ) {
      alert("信息不完整，请检查");
      return;
    }
    
    if(this.isNew){
      this.trainServ.addTranier(this.object).subscribe(data=>{
        this.back()
      })
    }else{
      this.trainServ.addTranier(this.object).subscribe(data=>{
        this.back()
      })
    }
  }

  back(){
    this.loc.back()
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id']
      if (id == "new") {
        this.isNew = true;
      } else {
        this.trainServ.getTrainerById(id).subscribe(contact => {
          this.object = contact
        })
      }
    })
  }

}
