import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HanshengBookStoreService } from "../hansheng-book-store.service"
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-hansheng-book-store-edit',
  templateUrl: './hansheng-book-store-edit.component.html',
  styleUrls: ['./hansheng-book-store-edit.component.scss']
})
export class HanshengBookStoreEditComponent implements OnInit {

  book:Book= {
      name:"",
      author:"",
      introduce:"",
      wordsNum:0
  }
    isNew:boolean
  constructor(
    private route: ActivatedRoute,
    private loc:Location,
  private hanshengBookStoreService:HanshengBookStoreService,
  public dialog: MdDialog) { 
    if(hanshengBookStoreService.editObject){
      this.book = hanshengBookStoreService.editObject
    }
  }

  save(){
    if(this.book.name==""||this.book.author==""||this.book.introduce==""){
      alert("信息不完整，请检查")
      // this.dialog.open(DialogResult);
      return
    }
    if(this.isNew){
      console.log(2222)
      this.hanshengBookStoreService.addBook(this.book)
    } 
    this.back()
  }
  back(){
    this.loc.back()
  }

  ngOnInit() {
     this.route.params.subscribe(params=>{
          let name = params['name']
          if(name=="new"){
            this.isNew = true;
          }else{
            this.hanshengBookStoreService.getBookByName(name).subscribe(book=>{
            this.book = book
        })
      }

    })
  }

}
