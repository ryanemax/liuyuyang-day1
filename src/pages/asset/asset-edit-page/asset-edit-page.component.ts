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
    price: 1,
    addTime:{
      __type:"Date",
      iso: ""
    },
    img: "../../../assets/img/asset/img.png"
  }

  currentMaxNo: number

  constructor(private route: ActivatedRoute, private assetService: AssetService, private location: Location) {
    this.assetService.getAssetCount().subscribe(data => {
      this.currentMaxNo = data
    })
  }

  // 返回上一页
  returnList() {
    this.location.back()
  }

  // 新增/保存
  saveAsset() {
    if (this.obj.name == "" || this.obj.brand == "" || this.obj.price < 0) {
      alert("信息不完整，请检查")
      return
    }
    if (this.obj.no == 0) {// 编号为空，代表新增
      this.obj.no = this.currentMaxNo + 1
      // delete this.obj.addTime
      this.assetService.add(this.obj).subscribe(data => {
        this.returnList()
        this.assetService.refresh()        
      })
    } else {
      this.assetService.update(this.obj).subscribe(data => {
        this.returnList()
        this.assetService.refresh()
      })
    }
    
  }

  ngOnInit() {
    // 修改的时候显示信息
    this.route.params.subscribe(params => {
      let id = params['id']
      if (id != "new") {
        this.assetService.getAssetById(id).subscribe(data => {
          this.obj = data
        })
      }
    })
  }

}
