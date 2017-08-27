import { Component, OnInit } from '@angular/core';

interface Asset {
  no: number,
  name: string,
  classification: string,
  brand: string
  price: number
  addTime: string
}

@Component({
  selector: 'app-asset-list-page',
  templateUrl: './asset-list-page.component.html',
  styleUrls: ['./asset-list-page.component.scss']
})

export class AssetListPageComponent implements OnInit {
  assets: Array<Asset>;
  constructor() {
    this.getAssets()
  }

  getAssets() {
    this.assets = [
      {
        no: 1, name: "ONLY黑色连帽卫衣",
        classification: "上衣",
        brand: "ONLY",
        price: 244, addTime: "2016-03-03"
      },{
        no: 2, name: "ONLY荷叶边连衣裙",
        classification: "裙装",
        brand: "ONLY",
        price: 249, addTime: "2016-06-07"
      },{
        no: 3, name: "ONLY修身小脚牛仔裤",
        classification: "裤装",
        brand: "ONLY",
        price: 199, addTime: "2016-10-05"
      }, {
        no: 4, name: "平底绣花布鞋",
        classification: "鞋靴",
        brand: "老北京布鞋",
        price: 29, addTime: "2016-10-05"
      }, {
        no: 5, name: "恒源祥夏用披肩",
        classification: "围巾",
        brand: "恒源祥",
        price: 138, addTime: "2017-07-03"
      }, {
        no: 6, name: "ZARA几何图形印花晚宴包",
        classification: "包包",
        brand: "ZARA",
        price: 399, addTime: "2017-08-10"
      }
    ]
  }

  selectSortType(){
    alert()
  }

  priceAsc() {
    // 正序排列
    // 数组操作API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.assets.sort((a, b) => {
      if (a.price > b.price) {
        return 1
      } else {
        return -1
      }
    })
  }

  priceDesc() {
    // 逆序排列   
    this.assets.sort((a, b) => {
      if (a.price < b.price) {
        return 1
      } else {
        return -1
      }
    }) 
  }

  random() {
    // 随机排列
    // 常用数学计算API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
    this.assets.sort((a, b) => {
      let randomVal = Math.random()-0.5;
      return randomVal
      }
    ) 
  }
  
  ngOnInit() {
  }

}

