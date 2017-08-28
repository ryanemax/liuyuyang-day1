import { Component, OnInit , Input } from '@angular/core';
import { PlayerService } from "../player.service"

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.scss']
})
export class PlayerInfoComponent implements OnInit {
  @Input() player:any
  constructor(private playerServ:PlayerService) { 

  }

  deletePlayer(player){
    this.playerServ.deleteById(player.objectId)

  }


  edit(){
    this.playerServ.editObject = this.player
    // this.loc.go("/contact/edit")
    // location.href = "/contact/edit"
  }
  ngOnInit() {
  }

}
