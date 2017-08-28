import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Headers } from '@angular/http';

import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';

@Injectable()
export class BookManagementService {
    // HTTP Params
    authHeaders:Headers = new Headers()
    host = "http://47.92.145.25:2337/parse"
    className = "MyBook"

  books:Array<JianglunBook>;

  constructor(private http:Http) { 
    this.authHeaders.append("X-Parse-Application-Id","dev")
    this.authHeaders.append("X-Parse-Master-Key","angulardev")
    this.authHeaders.append("Content-Type","application/json")
  }

  getBookById(id):Observable<Book>{

    let url = this.host+"/classes/" + this.className + "/" + id
    let options = {
      headers:this.authHeaders
    }

    return this.http
    .get(url,options)
    .map(data=>data.json())
  }

  getBooks():Observable<Array<Book>>{
    
    let url = this.host+"/classes/" + this.className
    let options = {
      headers:this.authHeaders
    }

    return this.http
    .get(url,options)
    .map(data=>data.json().results)
  }

  addBook(book){
    book.index = this.books.length + 1;
    this.books.push(book)
  }
  
  deleteByName(bookName){
    this.books.forEach((item,index,arr)=>{
      if(item.bookName == bookName){
        arr.splice(index,1)
      }
    })
  }
  
  ascPrice(){
    // 价格正序排列
    // 数组操作API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.books.sort((a,b)=>{
      if(a.price>b.price){
        return 1
      }else{
        return -1
      }
    })
}

  descPrice(){
    // 价格逆序排列    
    this.books.sort((a,b)=>{
      if(a.price<b.price){
        return 1
      }else{
        return -1
      }
    })
  }
  
  random(){
    // 随机排列
    // 常用数学计算API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
    this.books.forEach((item) => {item.random=Math.random()});
    this.books.sort((a,b)=>{
      if(a.random<b.random){
        return 1
      }else{
        return -1
      }
    })
  }

}
