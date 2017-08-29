import { Component, OnInit } from '@angular/core';
import { MovieService } from "../movie.service"


@Component({
  selector: 'app-movie-list-page',
  templateUrl: './movie-list-page.component.html',
  styleUrls: ['./movie-list-page.component.scss']
})
export class MovieListPageComponent implements OnInit {
  list:Array<any>;
  constructor(private movieServ:MovieService) {
    // this.list = this.contactServ.contacts
    this.movieServ.getMovies().subscribe(data=>{
      this.list = data
    })
  }

  asc(){
    // 正序排列
    // 数组操作API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.list.sort((a,b)=>{
      if(a.mark>b.mark){
        return 1
      }else{
        return -1
      }
    })
}


  desc(){
    // 逆序排列   
      this.list.sort((a,b)=>{
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
    this.list.forEach(item=>{
      item.random = Math.random()
    })
    this.list.sort((a,b)=>{
      if(a.random>b.random){
        return 1
      }else{
        return -1
      }
    })
}
  ngOnInit() {
  }

}
