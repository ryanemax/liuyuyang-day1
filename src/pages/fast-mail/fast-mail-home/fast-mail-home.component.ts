import { Component, OnInit } from '@angular/core';
import { FastMailService } from '../fast-mail.service';

@Component({
  selector: 'app-fast-mail-home',
  templateUrl: './fast-mail-home.component.html',
  styleUrls: ['./fast-mail-home.component.scss']
})
export class FastMailHomeComponent implements OnInit {
  goodList: Array<Good>;

  constructor(private fService: FastMailService) {
  }

  ngOnInit() {
    this.fService.getGoods().subscribe(data => {
      this.fService.goodList = data;
      this.goodList = this.fService.goodList;
    });
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
