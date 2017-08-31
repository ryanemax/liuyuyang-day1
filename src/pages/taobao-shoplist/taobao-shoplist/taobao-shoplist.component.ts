import { Component, OnInit } from '@angular/core';
import { ShopService } from "../shop.service"



@Component({
  selector: 'app-taobao-shoplist',
  templateUrl: './taobao-shoplist.component.html',
  styleUrls: ['./taobao-shoplist.component.scss']
})
export class TaobaoShoplistComponent implements OnInit {

  shops: Array<any>;
  constructor(private shopServ:ShopService) {
     this.shopServ.getShops().subscribe(data=>{
       console.log("rrrr"+data)
      this.shops = data
    })
  }


  delete(shop){
    this.shopServ.deleteById(shop.objectId).subscribe(data=>{
        location.href = "/shoplist"
    })
  }
  

 asc(){
    // 正序排列
    // 数组操作API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.shops.sort((a,b)=>{
      if(a.index>b.index){
        return 1
      }else{
        return -1
      }
    })
}


  desc(){
    // 逆序排列   
      this.shops.sort((a,b)=>{
      if(a.index>b.index){
        return -1
      }else{
        return 1
      }
    }) 
  }

  random() {
    this.shops.sort((a, b) => {
      if (a.random > b.random) {
        return 1
      } else {
        return -1
      }
    })

  }
  ngOnInit() {
  }

}
