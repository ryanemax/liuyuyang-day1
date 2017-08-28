import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {BookManagementService} from '../book-management.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss']
})
export class BookNewComponent implements OnInit {
  object:JianglunBook = {
    index : 0,
    bookName : "",
    author : "",
    price : 0,
    summary : "",
    random : 0
  };
  isNew:boolean;
  constructor(private route: ActivatedRoute,private loc:Location,private bookServ:BookManagementService) { }

  save(){
    if(this.object.bookName==""||this.object.author==""||this.object.price==null){
      alert("信息不完整，请检查")
      // this.dialog.open(DialogResult);
      return
    }
    this.bookServ.addBook(this.object)
    this.back()
  }

  back(){
    this.loc.back()
  }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      let index = params['index']
      if(index=="new"){
        this.isNew = true;
      }else{
        this.bookServ.getBookByBookIndex(index).subscribe(book=>{
        this.object = book
    })
  }

})
  }

}
