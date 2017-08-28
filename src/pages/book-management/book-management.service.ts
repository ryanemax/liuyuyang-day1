import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';

@Injectable()
export class BookManagementService {
  books:Array<Book>;
  constructor() { 
    this.getBooks()
  }

  getBookByBookIndex(index):Observable<Book>{
    let book = this.books.find(item=>item.index == index)
    return Observable.of(book)
  }

  getBooks(){
     this.books = [
      {index:1, bookName:"深入理解ES6", author:"Nicholas，C.，Zakas", price:78.20, 
      summary:"参透ECMAScript标准不啻前端通行证 随一代宗师参详JavaScript精进之路", random:Math.random()},
      {index:2, bookName:"Node.js区块链开发", author:"朱志文", price:45.40, 
      summary:"这是一本基于一个实际运行的区块链产品，从代码层面深度完整讲述区块链开发的书籍；这是一本开源产品的实践书籍，通过工程思维，讲解工程实践，真正体现编程技术的工具价值。", random:Math.random()},
      {index:3, bookName:"架构解密：从分布式到微服务", author:"Leader-us", price:66.20, 
      summary:"历经三年终出版！从你想了解的源码、理论、经验、视野等维度，对从分布式到微服务，进行架构解密！", random:Math.random()},
      {index:4, bookName:"Hadoop构建数据仓库实践", author:"王雪迎", price:70.30, 
      summary:"通过构建数据仓库，深入学习Hadoop, 轻松掌握大数据技术", random:Math.random()},
      {index:5, bookName:"MongoDB实战（第二版）", author:"Kyle，Banker，Peter，Bakkum，Shaun ...", price:59.10, 
      summary:"MongoDB官方团队编写，架构师必备图书。", random:Math.random()}
    ]
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
