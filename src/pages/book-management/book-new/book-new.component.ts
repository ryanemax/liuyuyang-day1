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
  object : JianglunBook = {
    index : 0,
    objectId : "",
    bookName : "",
    author : "",
    price : 0,
    summary : ""
  } ;
  isNew:boolean;
  constructor(private route: ActivatedRoute,private loc:Location,private bookServ:BookManagementService) {
    
  }

  save(){
    if(this.object.bookName==""||this.object.author==""||this.object.price==0){
      alert("信息不完整，请检查")
      // this.dialog.open(DialogResult);
      return
    }
    if(this.isNew){
      this.bookServ.saveBook(this.object).subscribe(data=>{
        this.back()
      })
    }else{
      this.bookServ.saveBook(this.object).subscribe(data=>{
        this.back()
      })
    }
  }

  back(){
    this.loc.back()
  }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      let id = params['id']
      if(id=="new"){
        this.isNew = true;
      }else{
        this.bookServ.getBookById(id).subscribe(book=>{
        this.object = book
    })
  }

})
  }

}
