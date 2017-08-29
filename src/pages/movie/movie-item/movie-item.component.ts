import { Component, OnInit, Input } from '@angular/core';

import { MovieService } from "../movie.service";

import { Location } from "@angular/common"

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  @Input() movie:any
  constructor(private movieService:MovieService, private loc:Location) { }

  delete(movie){
    this.movieService.deleteById(movie.objectId).subscribe(data=>{
        location.href = "/movie"
    })
  }
  edit(){
    this.movieService.editObject = this.movie
  }

  ngOnInit() {
  }
}
