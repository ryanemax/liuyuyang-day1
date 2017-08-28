import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GoodsShopService } from "../goods-shop.service"

@Component({
  selector: 'app-goods-edit',
  templateUrl: './goods-edit.component.html',
  styleUrls: ['./goods-edit.component.scss']
})
export class GoodsEditComponent implements OnInit {
  object: Item = {
    name:"",
    price: ""
  }
  isNew:boolean
  constructor(private route: ActivatedRoute,private loc:Location,
  private goodsServ: GoodsShopService) { 
    if(goodsServ.editObject){
      this.object = goodsServ.editObject
    }
  }

  save(){
    if(this.object.name==""||this.object.price==""){
      alert("信息不完整，请检查")
      // this.dialog.open(DialogResult);
      return
    }
    if(this.isNew){
      this.goodsServ.addContact(this.object)
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
        this.goodsServ.getContactByName(name).subscribe(item=>{
          this.object = item;
        })
      }
    })
  }

}