import { Component, OnInit } from '@angular/core';
import { HanshengBookStoreService } from "../hansheng-book-store.service"

interface BookModel{
  name:string,
  author:string,
  introduce:string,
  wordsNum:number
  random:number
}

@Component({
  selector: 'app-hansheng-book-store-page',
  templateUrl: './hansheng-book-store-page.component.html',
  styleUrls: ['./hansheng-book-store-page.component.scss']
})
export class HanshengBookStorePageComponent implements OnInit {

  books:Array<BookModel>;
  constructor(private hanshengBookStoreService:HanshengBookStoreService) {
    this.books = this.hanshengBookStoreService.books
  }
  asc(){
    this.hanshengBookStoreService.asc()
  }
  desc(){
    this.hanshengBookStoreService.desc()
  }
  random(){
       this.hanshengBookStoreService.random()
  }

  ngOnInit() {
  }

}
