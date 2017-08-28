import { Injectable } from '@angular/core';

import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';


@Injectable()
export class MovieService {
  movies:Array<Movie>;
  editObject:Movie;
  constructor() { 
    this.getMovies()
  }
  getMovieByName(name):Observable<Movie>{
    let movie = this.movies.find(item=>item.movieName == name)
    return Observable.of(movie)
  }
  getMovies(){
    this.movies = [
     {movieName:"星际特工",mark:7.0,director:"吕克·贝松",year:2017},
     {movieName:"战狼2",mark:7.4,director:"吴京",year:2017},
     {movieName:"敦刻尔克",mark:8.3,director:"克里斯托弗·诺兰",year:2017},
     {movieName:"目击者之追凶",mark:8.1,director:" 程伟豪",year:2017},
     {movieName:"一些怪人",mark:7.1,director:"麦当劳",year:2016},
     {movieName:"猎杀星期一",mark:6.6,director:"托米·维尔科拉",year:2016},
   ]
 }
  addMovie(movie){
    this.movies.push(movie)
  }
  deleteByName(name){
    this.movies.forEach((item,index,arr)=>{
      if(item.movieName == name){
        arr.splice(index,1)
      }
    })
  }

  asc(){
    // 正序排列
    // 数组操作API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.movies.sort((a,b)=>{
      if(a.mark>b.mark){
        return 1
      }else{
        return -1
      }
    })
}


  desc(){
    // 逆序排列   
      this.movies.sort((a,b)=>{
      if(a.mark>b.mark){
        return -1
      }else{
        return 1
      }
    }) 
  }
  random(){
    // 随机排列
    // 常用数学计算API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
    this.movies.forEach(item=>{
      item.random = Math.random()
    })
    this.asc()
}

}


