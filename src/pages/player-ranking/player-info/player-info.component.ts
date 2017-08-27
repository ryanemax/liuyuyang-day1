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

  deletePlayer(user){
    // this.playerServ
  }

  ngOnInit() {
  }

}
