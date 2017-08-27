import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';

interface BookModel{
  name:string,
  author:string,
  introduce:string,
  wordsNum:number
  random:number
}

@Injectable()
export class HanshengBookStoreService {

  editObject:Book;
  books:Array<BookModel>;
  constructor() { 
    this.getbookModels()
  }

  getbookModels(){
     this.books = [
      {name:"JAVA编程思想",author:"埃克尔",introduce:"一本关于java的书",wordsNum:100,random:20},
      {name:"PYTHON基础教程",author:"赫特兰",introduce:"基础教程",wordsNum:200, random:30},
      {name:"VUEX权威指南",author:"张耀春等",introduce:"一本关于VUE的书",wordsNum:300, random:40},
      {name:"ANGULAR2权威指南",author:"Nate Murray",introduce:"一本关于angular的书", wordsNum:400,random:50},
    ]
  }

  getBookByName(name):Observable<Book>{
    let book = this.books.find(item=>item.name == name)
    return Observable.of(book)
  }
   addBook(obj:Book){
    var random = Math.random();
    random = Math.round(random*10000);
    let newBook = {
      name:"新增加书籍" + obj.name,
      author:"随机作者"+ obj.author,
      introduce:"一本随机的书",
      wordsNum:Math.round(random/100),
      random:Math.random()
    }
    this.books.push(newBook)
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

  deleteByName(name){
    this.books.forEach((item,index,arr)=>{
      if(item.name == name){
        arr.splice(index,1)
      }
    })
  }

}
