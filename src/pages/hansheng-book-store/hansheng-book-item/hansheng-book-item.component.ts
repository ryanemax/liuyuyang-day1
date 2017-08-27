import { Component, OnInit, Input} from '@angular/core';
import { HanshengBookStoreService } from "../hansheng-book-store.service"

@Component({
  selector: 'app-hansheng-book-item',
  templateUrl: './hansheng-book-item.component.html',
  styleUrls: ['./hansheng-book-item.component.scss']
})
export class HanshengBookItemComponent implements OnInit {

  @Input() book:any
  constructor(private hanshengBookStoreService:HanshengBookStoreService) { 

  }

  // 依赖处理 start
  // 依赖处理 end
  ngOnInit() {
  }

}
