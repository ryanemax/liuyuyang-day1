import { Component, OnInit, Input } from '@angular/core';
import { BookManagementService } from "../book-management.service"

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  index : number = 1;
  books : Array<JianglunBook>;
  @Input() book:any;
  constructor(private bookServ:BookManagementService) {
    let index = this.index;
    this.bookServ.getBooks().subscribe(data=>{
      this.books = data
      this.books.forEach(book => book.index = index++);
    })
    
  }

  delete(book){
    this.bookServ.deleteById(book.objectId).subscribe(data=>{
        location.href = "/book-management"
    })
  }

  ascPrice(){
    // 价格正序排列
    // 数组操作API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    let index = this.index;
    this.books.sort((a,b)=>{
      if(a.price>b.price){
        return 1
      }else{
        return -1
      }
    }).forEach(book => book.index = index++);
}

  descPrice(){
    // 价格逆序排列    
    let index = this.index;
    this.books.sort((a,b)=>{
      if(a.price<b.price){
        return 1
      }else{
        return -1
      }
    }).forEach(book => book.index = index++);
  }
  
  random(){
    // 随机排列
    // 常用数学计算API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
    let index = this.index;
    this.books.forEach((item) => {item.random=Math.random()});
    this.books.sort((a,b)=>{
      if(a.random<b.random){
        return 1
      }else{
        return -1
      }
    }).forEach(book => book.index = index++);
  }

  ngOnInit() {
  }

}
