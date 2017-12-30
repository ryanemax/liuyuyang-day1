import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';

import {PlayerService} from '../player.service'

import {MatDialog, MatDialogRef} from '@angular/material';
@Component({
  selector: 'app-player-edit-page',
  templateUrl: './player-edit-page.component.html',
  styleUrls: ['./player-edit-page.component.scss']
})
export class PlayerEditPageComponent implements OnInit {

  object:FootballPlayer = {
    name:"",
    team:"",
    goal:0,
    assist:0,
    palyerMinutes:0
  }
  isNew:boolean
  constructor(private route: ActivatedRoute,
    private loc:Location,
  private playerServ:PlayerService,
  public dialog: MatDialog) {
    if(playerServ.editObject){
      this.object = playerServ.editObject
    }


   }


   save(){
    if(this.object.name==""||this.object.team==""||this.object.goal==0||this.object.assist==0){
      alert("信息不完整，请检查")
      // this.dialog.open(DialogResult);
      return
    }
    if(this.isNew){
      this.playerServ.savePlayer(this.object).subscribe(data=>{
        this.back()
      })
    } else{
      this.playerServ.savePlayer(this.object).subscribe(data=>{
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
        this.playerServ.getPlayerById(id).subscribe(player=>{
        this.object = player
    })
  }

})
  }

}
