import { Component, OnInit, Input } from '@angular/core';
import { BookManagementService } from "../book-management.service"

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books : Array<Book>;
  @Input() book:any;
  constructor(private bookServ:BookManagementService) {
    this.books = this.bookServ.books;
  }

  delete(book){
    this.bookServ.deleteByName(book.bookName)
  }

  ascPrice(){
    this.bookServ.ascPrice()
  }
  descPrice(){
    this.bookServ.descPrice()
  }
  random(){
    this.bookServ.random()
  }
  ngOnInit() {
  }

}
