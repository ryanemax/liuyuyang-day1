import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FastMailService } from '../fast-mail.service';

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

  constructor(private loc: Location,
  private fService: FastMailService) { }

  ngOnInit() {
    this.tmpGood.index = this.fService.getListLength();
  }

  onClickBack(): void {
    this.loc.back();
  }

  onClickSave(): void {
    this.fService.addGoods(this.tmpGood);
    this.onClickBack();
  }
}
