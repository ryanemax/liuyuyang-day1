import { Component, OnInit } from '@angular/core';
import { HanshengBookStoreService } from "../hansheng-book-store.service"

@Component({
  selector: 'app-hansheng-book-store-page',
  templateUrl: './hansheng-book-store-page.component.html',
  styleUrls: ['./hansheng-book-store-page.component.scss']
})
export class HanshengBookStorePageComponent implements OnInit {

  books:Array<Book>;
  constructor(private hanshengBookStoreService:HanshengBookStoreService) {
    this.hanshengBookStoreService.getBooks().subscribe(data=>{
      console.log(data)
      this.books = data
    })
  }
  asc(){
    // 正序排列
    // 数组操作API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.books.sort((a,b)=>{
      if(a.wordsNum>b.wordsNum){
        return 1
      }else{
        return -1
      }
    })
}


  desc(){
    // 逆序排列
     this.books.sort((a,b)=>{
      if(a.wordsNum<b.wordsNum){
        return 1
      }else{
        return -1
      }
    })   
  }
  random(){
    this.books.sort((a,b)=>{
        return Math.random()
    })   
  }
  ngOnInit() {
  }

}
