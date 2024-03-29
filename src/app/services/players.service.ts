import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Player } from '../models/Player';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  uri: string = environment.API_URL + 'players';
  private players: Player[] = [];

  constructor(private http: HttpClient) {

  }

  public getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.uri);
  }
}
