import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FastMailService } from '../fast-mail.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-fast-mail-edit',
  templateUrl: './fast-mail-edit.component.html',
  styleUrls: ['./fast-mail-edit.component.scss']
})
export class FastMailEditComponent implements OnInit {
  tmpGood: Good = {
    name: "",
    tel: "",
    addr: "",
    date: "",
    index: 0
  };

  index: number;

  constructor(private loc: Location,
  private fService: FastMailService,
  private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.index = params['index'];
      if (this.index == -1) {
        this.tmpGood.index = this.fService.getListLength();
      } else {
        this.tmpGood = this.fService.getGoodsById(this.index);
      }
    })
  }

  onClickBack(): void {
    this.loc.back();
  }

  onClickSave(): void {
    this.fService.addGoods(this.tmpGood);
    this.onClickBack();
  }
}
