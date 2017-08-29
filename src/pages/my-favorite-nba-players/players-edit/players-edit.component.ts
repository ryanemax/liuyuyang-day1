import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { PlayerService } from '../player.service';

@Component({
  selector: 'app-players-edit',
  templateUrl: './players-edit.component.html',
  styleUrls: ['./players-edit.component.scss']
})
export class PlayersEditComponent implements OnInit {

  object: Player = {
    index: 0,
    name: "",
    abilityScore: 0,
    salary: 0
  };

  isNew: boolean;

  constructor(
    private route: ActivatedRoute,
    private loc: Location,
    private playerService: PlayerService) {
    if (playerService.editObject) {
      this.object = playerService.editObject
    }
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let index = params['index']
      if (index == "new") {
        this.isNew = true;
      } else {
        this.playerService.getPlayerByIndex(index).subscribe(contact => {
          this.object = contact
        })
      }
    })
  }

  save() {
    if (this.object.name == "" || this.object.abilityScore == 0 || this.object.salary == 0) {
      alert("information incomplete, please double check");
      return;
    }
    if (this.isNew) {
      this.playerService.addNewPlayer(this.object)
    }else{
      this.playerService.updatePlayer(this.object)
    }
    this.back();
  }

  back() {
    this.loc.back();
  }

}
