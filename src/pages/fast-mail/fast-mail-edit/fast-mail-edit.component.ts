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
    objectId: ""
  };

  objectId: string;

  constructor(private loc: Location,
  private fService: FastMailService,
  private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.objectId = params['id'];
      if (this.objectId == '-1') {

      } else {
        this.fService.getGoodsById(this.objectId).subscribe(data => {
          this.tmpGood = data;
        });
      }
    })
  }

  onClickBack(): void {
    this.loc.back();
  }

  onClickSave(): void {
    if (this.objectId == '-1') {
      this.fService.addGoods(this.tmpGood).subscribe(data => {
        this.onClickBack();
      });
    } else {
      this.fService.updateGoods(this.tmpGood).subscribe(data => {
        this.onClickBack();
      });
    }
  }
}
