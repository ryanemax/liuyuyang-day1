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
    price: 0,
    image: "默认.jpg"
  }
  isNew:boolean
  constructor(private route: ActivatedRoute,
  private goodsServ: GoodsShopService,private loc:Location) { 
    if(goodsServ.editObject){
      this.object = goodsServ.editObject
    }
  }

  save(){
    if(this.object.name==""||this.object.price==null){
      alert("信息不完整，请检查")
      // this.dialog.open(DialogResult);
      return
    }
    if(this.isNew){
      this.goodsServ.addContact(this.object).subscribe()
    }else{
      this.goodsServ.updateContact(this.object).subscribe()
    }
    this.back()
    this.goodsServ.refresh() // 调用第三方
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
        this.goodsServ.getContactById(id).subscribe(data=>{
          this.object = data;
        })
      }
    })
  }

}
