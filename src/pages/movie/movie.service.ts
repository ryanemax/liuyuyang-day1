import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';

import { Observable } from "rxjs/Observable"
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';

@Injectable()
export class MovieService {

  // HTTP Params
  authHeaders:Headers = new Headers()
  host = "http://47.92.145.25:2337/parse"
  className = "Movie"

  movies:Array<Movie>;
  editObject:Movie;
  constructor(private http:Http) { 
    this.authHeaders.append("X-Parse-Application-Id","dev")
    this.authHeaders.append("X-Parse-Master-Key","angulardev")
    this.authHeaders.append("Content-Type","application/json")

  }


 getMovies():Observable<Array<Movie>>{
  
      let url = this.host+"/classes/" + this.className
      let options = {
        headers:this.authHeaders
      }
  
      return this.http
      .get(url,options)
      .map(data=>data.json().results)
    }

  getMovieById(id):Observable<Movie>{
    let url = this.host+"/classes/" + this.className + "/" + id
    console.log(url)
    let options = {
      headers:this.authHeaders
    }

    return this.http
    .get(url,options)
    .map(data=>data.json())
  }

//   getMovies(){
//     this.movies = [
//      {movieName:"星际特工",mark:7.0,director:"吕克·贝松",year:2017},
//      {movieName:"战狼2",mark:7.4,director:"吴京",year:2017},
//      {movieName:"敦刻尔克",mark:8.3,director:"克里斯托弗·诺兰",year:2017},
//      {movieName:"目击者之追凶",mark:8.1,director:" 程伟豪",year:2017},
//      {movieName:"一些怪人",mark:7.1,director:"麦当劳",year:2016},
//      {movieName:"猎杀星期一",mark:6.6,director:"托米·维尔科拉",year:2016},
//    ]
//  }




saveMovie(movie){
  // this.http.post()
  let url = this.host+"/classes/" + this.className
  let options = {
    headers:this.authHeaders
  }
  if(movie.objectId){
    let id = movie.objectId
    delete movie.createdAt
    delete movie.updatedAt
    delete movie.objectId
    delete movie.ACL

    return this.http
    .put(url+"/"+id,movie,options)
    .map(data=>data.json())
  }else{
    return this.http
    .post(url,movie,options)
    .map(data=>data.json())
  }
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


