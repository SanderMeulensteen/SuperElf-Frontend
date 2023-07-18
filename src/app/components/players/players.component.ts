import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from 'src/app/models/Player';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  players$: Observable<Player[]> = new Observable;


  constructor(private playersService: PlayersService) {
  }

  ngOnInit(): void {
    this.players$ = this.playersService.getPlayers();
  }

}
