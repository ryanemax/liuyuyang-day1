import { Component, OnInit,Input } from '@angular/core';
import { FastMailService } from '../fast-mail.service';

@Component({
  selector: 'app-fast-mail-item',
  templateUrl: './fast-mail-item.component.html',
  styleUrls: ['./fast-mail-item.component.scss']
})
export class FastMailItemComponent implements OnInit {
  @Input() good: any

  constructor(private fService: FastMailService) { }

  ngOnInit() {
  }

  onClickDelete(): void {
    this.fService.deleteGoodsById(this.good.index);
  }

}
