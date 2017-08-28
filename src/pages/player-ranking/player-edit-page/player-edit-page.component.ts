import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';

import {PlayerService} from '../player.service'

import {MdDialog, MdDialogRef} from '@angular/material';
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
  public dialog: MdDialog) {
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
      this.playerServ.addPlayer(this.object)
    }
    this.back()
  }
  back(){
    this.loc.back()
  }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      let name = params['name']
      if(name=="new"){
        this.isNew = true;
      }else{
        this.playerServ.getPlayerByName(name).subscribe(player=>{
        this.object = player
    })
  }

})
  }

}
