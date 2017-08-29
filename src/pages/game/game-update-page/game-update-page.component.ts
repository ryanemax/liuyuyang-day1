import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-update-page',
  templateUrl: './game-update-page.component.html',
  styleUrls: ['./game-update-page.component.scss']
})
export class GameUpdatePageComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
