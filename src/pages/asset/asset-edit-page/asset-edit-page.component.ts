import { Component, OnInit } from '@angular/core';
import { MdInputModule } from '@angular/material';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AssetService } from '../asset.service'
import { Location } from '@angular/common';

@Component({
  selector: 'app-asset-edit-page',
  templateUrl: './asset-edit-page.component.html',
  styleUrls: ['./asset-edit-page.component.scss']
})
export class AssetEditPageComponent implements OnInit {

  obj: Asset = {
    no: 0,
    name: "",
    classification: "",
    brand: "",
    price: 0,
    addTime: null,
    img: ""
  }

  constructor(private route: ActivatedRoute, private assetService: AssetService, private location: Location) { }

  // 返回上一页
  returnList() {
    this.location.back()
  }

  // 新增/保存
  saveAsset(){
    if(this.obj.name==""||this.obj.brand==""||this.obj.price<0){
      alert("信息不完整，请检查")
      return
    }
    if(this.obj.no==0){// 编号为空，代表新增
      this.obj.no = (this.assetService.getAssets.length+1)
      this.obj.addTime=new Date()
      this.obj.img="../../../assets/img/asset/img.png"
      this.assetService.add(this.obj)
    }
    this.returnList()
  }

  ngOnInit() {
    // 修改的时候显示信息
    this.route.params.subscribe(params => {
      let no = params['no']
      if ( no != "new") {
        this.assetService.getAssetByNo(no).subscribe(asset => {
          this.obj = asset
        })
      }
    })
  }

}
