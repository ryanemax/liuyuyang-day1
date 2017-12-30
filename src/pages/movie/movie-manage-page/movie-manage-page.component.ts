import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { MovieService } from "../movie.service";

import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-movie-manage-page',
  templateUrl: './movie-manage-page.component.html',
  styleUrls: ['./movie-manage-page.component.scss']
})
export class MovieManagePageComponent implements OnInit {

  object:Movie = {
    movieName:"",
    director:"",
    mark:0
  }
  isNew:boolean
  constructor(
    private route: ActivatedRoute,
    private loc:Location,
  private movieServe:MovieService,
  public dialog: MatDialog) { 
    if(movieServe.editObject){
      this.object = movieServe.editObject
    }
  }
  
  save(){
    if(this.object){
      this.object.mark =  Number(this.object.mark)
    }

    if(this.isNew){
      this.movieServe.saveMovie(this.object).subscribe(data=>{
        this.back()
      })
    }else{
      this.movieServe.saveMovie(this.object).subscribe(data=>{
        this.back()
      })
    }
  }
  back(){
    this.loc.back()
  }
  ngOnInit() {
          this.route.params.subscribe(params=>{
          let id = params['id']
          if(id=="new"){
            this.isNew = true;
          }else{
            this.movieServe.getMovieById(id).subscribe(movie=>{
            this.object = movie
        })
      }
    })
  }

}
