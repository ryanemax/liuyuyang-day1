import { Component, OnInit } from '@angular/core';
import { FastMailService } from '../fast-mail.service'

@Component({
  selector: 'app-fast-mail-home',
  templateUrl: './fast-mail-home.component.html',
  styleUrls: ['./fast-mail-home.component.scss']
})
export class FastMailHomeComponent implements OnInit {
  goodList: Array<any>;

  constructor(private fService: FastMailService) {
  }

  ngOnInit() {
     this.goodList = this.fService.getGoods();
  }

  onAscSortClick(): void {
    this.fService.onAscSortClick();
  }

  onDescSortClick(): void {
    this.fService.onDescSortClick();
  }

  onRandomSortClick(): void {
    this.fService.onRandomSortClick();
  }

}
