import { Component, OnInit } from '@angular/core';

interface Movie{
  movieName:string,
  mark:number,
  director:string,
  year:number
  random?:number
}

@Component({
  selector: 'app-movie-list-page',
  templateUrl: './movie-list-page.component.html',
  styleUrls: ['./movie-list-page.component.scss']
})
export class MovieListPageComponent implements OnInit {
  movies:Array<Movie>;
  constructor() {
    this.getMovies()
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

  addMovie(){
    let newMovie = {
      movieName:"猎杀星期一",
      mark:6.6,
      director:"托米·维尔科拉",
      year:2016
    }
    this.movies.push(newMovie)
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
      if(a.mark<b.mark){
        return 1
      }else{
        return -1
      }
    })   
  }
  random(){
    this.movies.forEach((movie)=>{
      let randomNum = Math.random()
      movie.random = randomNum
    })  
  
    this.movies.sort((a,b)=>{
      if(a.random>b.random){
        return 1
      }else{
        return -1
      }
    })
    // 随机排列
    // 常用数学计算API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
  }

  ngOnInit() {
  }

}
