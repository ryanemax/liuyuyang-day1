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
    this.list = this.movieServ.movies
  }

  asc(){
    this.movieServ.asc()
  }
  desc(){
    this.movieServ.desc()
  }
  random(){
    this.movieServ.random()
  }

  ngOnInit() {
  }

}
