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
      // 第一次输出为0，第二次输出正确？
      // this.assetService.getAssetCount().subscribe(data => {
      //   this.obj.no =  data+1
      //   console.log(this.obj.no)
      //  })
      //  console.log(this.obj.no)

      this.obj.no = this.currentMaxNo + 1
      this.assetService.add(this.obj).subscribe(data => {
        this.returnList()
      })
    } else {

      this.assetService.update(this.obj).subscribe(data => {
        this.returnList()
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
