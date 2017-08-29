import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { MovieService } from "../movie.service";
import { Location } from '@angular/common'; 

@Component({
  selector: 'app-movie-detail-page',
  templateUrl: './movie-detail-page.component.html',
  styleUrls: ['./movie-detail-page.component.scss']
})
export class MovieDetailPageComponent implements OnInit {
  detailMovie:Movie = {
    movieName:"",
    mark:0,
    director:""
  }

  constructor(private route: ActivatedRoute, private movieService: MovieService, private location: Location) { }

  returnList() {
    this.location.back()
  }

  ngOnInit() {
    // 根据ID显示信息
    this.route.params.subscribe(params => {
      let id = params['id']
        this.movieService.getMovieById(id).subscribe(movie => {
          console.log(movie)
          this.detailMovie = movie

        })
      }
    )
  }

}
