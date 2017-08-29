import { Component, OnInit, Input } from '@angular/core';
import { GoodsShopService } from "../goods-shop.service"

@Component({
  selector: 'app-goods-item',
  templateUrl: './goods-item.component.html',
  styleUrls: ['./goods-item.component.scss']
})
export class GoodsItemComponent implements OnInit {
  @Input() item:any

  constructor(private goodsServ: GoodsShopService) { }

  delete(item){
    this.goodsServ.deleteById(item.objectId)
  }

  edit(){
    this.goodsServ.editObject = this.item
  }

  ngOnInit() {
  }

}
