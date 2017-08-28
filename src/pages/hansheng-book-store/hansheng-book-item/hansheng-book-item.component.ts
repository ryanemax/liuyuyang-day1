import { Component, OnInit, Input} from '@angular/core';
import { HanshengBookStoreService } from "../hansheng-book-store.service"
import { Location } from "@angular/common"

@Component({
  selector: 'app-hansheng-book-item',
  templateUrl: './hansheng-book-item.component.html',
  styleUrls: ['./hansheng-book-item.component.scss']
})
export class HanshengBookItemComponent implements OnInit {

  @Input() book:any
  constructor(private hanshengBookStoreService:HanshengBookStoreService,
  private loc:Location) { }
  delete(book){
    this.hanshengBookStoreService.deleteByName(book.name)
  }
  edit(){
    this.hanshengBookStoreService.editObject = this.book

  }
  ngOnInit() {
  }

}
