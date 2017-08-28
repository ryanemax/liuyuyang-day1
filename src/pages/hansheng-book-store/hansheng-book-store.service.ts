import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Http, Headers } from '@angular/http';

interface BookModel{
  name:string,
  author:string,
  introduce:string,
  wordsNum:number
  random:number
}

@Injectable()
export class HanshengBookStoreService {

  // HTTP Params
  authHeaders:Headers = new Headers()
  host = "http://localhost:1337/parse"
  className = "HanshengBookStore"

  editObject:Book;
  books:Array<BookModel>;
  constructor(private http:Http) {
    this.authHeaders.append("X-Parse-Application-Id","dev")
    this.authHeaders.append("X-Parse-Master-Key","angulardev")
    this.authHeaders.append("Content-Type","application/json")

    // TODO?
    this.getBookById("1I5Xc6S5Zf").subscribe(data=>{
      console.log(data)
    })
    // this.getbookModels()
  }

  // getbookModels(){
  //    this.books = [
  //     {name:"JAVA编程思想",author:"埃克尔",introduce:"一本关于java的书",wordsNum:100,random:20},
  //     {name:"PYTHON基础教程",author:"赫特兰",introduce:"基础教程",wordsNum:200, random:30},
  //     {name:"VUEX权威指南",author:"张耀春等",introduce:"一本关于VUE的书",wordsNum:300, random:40},
  //     {name:"ANGULAR2权威指南",author:"Nate Murray",introduce:"一本关于angular的书", wordsNum:400,random:50},
  //   ]
  // }

  getBookByName(name):Observable<Book>{
    // let book = this.books.find(item=>item.name == name)
    // return Observable.of(book)

    return
  }

  // select object by id 2017/08/28 start
  getBookById(id):Observable<Book>{

    let url = this.host+"/classes/" + this.className + "/" + id
    let options = {
      headers:this.authHeaders
    }

    // http 调用
    return this.http
    .get(url,options)
    .map(data=>data.json())
  }
  // select object by id 2017/08/28 end

  getBooks():Observable<Array<Book>>{

    let url = this.host+"/classes/" + this.className
    let options = {
      headers:this.authHeaders
    }

    return this.http
    .get(url,options)
    .map(data=>data.json().results)
  }

   saveBook(obj:any){
     // common process
    let url = this.host+"/classes/" + this.className
    let options = {
      headers:this.authHeaders
    }
    if(obj.objectId){
      let id = obj.objectId
      delete obj.createdAt
      delete obj.updatedAt
      delete obj.objectId
      delete obj.ACL

      return this.http
      .put(url+"/"+id,obj,options)
      .map(data=>data.json())
    } else {

      var random = Math.random();
      random = Math.round(random*10000);
      let newBook = {
        name:"新增加书籍" + obj.name,
        author:"随机作者"+ obj.author,
        introduce:"一本随机的书",
        wordsNum:Math.round(random/100),
        random:Math.random()
      }

      return this.http
      .post(url,obj,options)
      .map(data=>data.json())
    }
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

  deleteById(id){
    let url = this.host+"/classes/" + this.className + "/" + id
    let options = {
      headers:this.authHeaders
    }

    return this.http
    .delete(url,options)
    .map(data=>data.json())
  }

}
