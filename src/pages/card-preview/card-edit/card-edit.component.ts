import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CardPreviewService } from '../card-preview.service';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.scss']
})
export class CardEditComponent implements OnInit {
  isNew:boolean;
  cardobject:Card = {
    name:"",
    type:"",
    cost:0,
    vocation:"",
    img:""
  }
  constructor(private cardPreviewService:CardPreviewService,private route: ActivatedRoute,private loc:Location) { }
  back(){
    this.loc.back()
  }
  save(){
    if(this.cardobject.name==""||this.cardobject.type==""||this.cardobject.vocation==""||this.cardobject.img==""){
      alert("信息不完整，请检查")
      // this.dialog.open(DialogResult);
      return
    }
    if(this.isNew){
      this.cardPreviewService.addCard(this.cardobject)
    }
    this.back()
  }
  ngOnInit() {
    this.route.params.subscribe(params=>{
      let name = params['name']
      if(name=="new"){
        this.isNew = true;
      }else{
        this.cardPreviewService.getCardByName(name).subscribe(card=>{
        this.cardobject = card;
    })
  }

})
  }

}
