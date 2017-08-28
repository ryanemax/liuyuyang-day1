import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { MovieService } from "../movie.service";

import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-movie-manage-page',
  templateUrl: './movie-manage-page.component.html',
  styleUrls: ['./movie-manage-page.component.scss']
})
export class MovieManagePageComponent implements OnInit {

  object:Movie = {
    movieName:"",
    mark:0,
    director:"",
    year:0
  }
  isNew:boolean
  constructor(
    private route: ActivatedRoute,
    private loc:Location,
  private contactServ:MovieService,
  public dialog: MdDialog) { 
    if(contactServ.editObject){
      this.object = contactServ.editObject
    }
  }
  
  save(){
    if(this.isNew){
      this.contactServ.addMovie(this.object)
    }
    this.back()
  }
  back(){
    this.loc.back()
  }
  ngOnInit() {
          this.route.params.subscribe(params=>{
          let movieName = params['movieName']
          if(movieName=="jack"){
            this.isNew = true;
          }else{
            this.contactServ.getMovieByName(movieName).subscribe(movie=>{
            this.object = movie
        })
      }

    })
  }

}
