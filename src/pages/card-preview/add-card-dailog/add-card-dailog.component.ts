import { Component, OnInit } from '@angular/core';
import {MdDialogRef , MD_DIALOG_DATA} from '@angular/material';
import { MaterialModule ,MdInputModule} from '@angular/material';
import { CardPreviewService,CardDatabase ,CardDataSource} from '../card-preview.service';
@Component({
  selector: 'app-add-card-dailog',
  templateUrl: './add-card-dailog.component.html',
  styleUrls: ['./add-card-dailog.component.scss']
})
export class AddCardDailogComponent implements OnInit {
  isNew:boolean;
  cardDatabase:CardDatabase
  cardobject:Card = {
    name:"",
    type:"",
    cost:0,
    vocation:"",
    img:""
  }
  constructor(private cardPreviewService:CardPreviewService,public dialogRef: MdDialogRef<AddCardDailogComponent>) {
    this.cardDatabase = new CardDatabase(cardPreviewService);

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
      this.cardDatabase.add(this.cardobject);
      this.back();
    }else{
      this.cardDatabase.update(this.cardobject);
      this.back();
    }
  }
  ngOnInit() {

  }

}
