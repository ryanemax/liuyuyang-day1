import { Component, OnInit } from '@angular/core';
import { CardPreviewService } from '../card-preview.service';
import {MdDialogRef} from '@angular/material';
@Component({
  selector: 'app-add-card-dailog',
  templateUrl: './add-card-dailog.component.html',
  styleUrls: ['./add-card-dailog.component.scss']
})
export class AddCardDailogComponent implements OnInit {
  isNew:boolean;
  cardobject:Card = {
    name:"",
    type:"",
    cost:0,
    vocation:"",
    img:""
  }
  constructor(private cardPreviewService:CardPreviewService,public dialogRef: MdDialogRef<AddCardDailogComponent>) {
    if(cardPreviewService.card){
      this.cardobject = cardPreviewService.card;
    }else{
      this.isNew = true;   
    }
   }
   back(){
    this.dialogRef.close();
  }
  save(){
    if(this.cardobject.name==""||this.cardobject.type==""||this.cardobject.vocation==""||this.cardobject.img==""){
      alert("信息不完整，请检查")
      // this.dialog.open(DialogResult);
      return
    }
    if(this.isNew){
      
      this.cardPreviewService.addCard(this.cardobject).subscribe(data=>{
          this.back();
      });
    }else{
      console.log(this.cardobject);
      this.cardPreviewService.updateCard(this.cardobject).subscribe(data=>{
        this.back();
      });
    }
  }
  ngOnInit() {
  
  }

}
