import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './components/players/players.component';
import { ClubsComponent } from './components/clubs/clubs.component';
import { CompetitionsComponent } from './components/competitions/competitions.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: 'players', component: PlayersComponent },
  { path: 'clubs', component: ClubsComponent },
  { path: 'competitions', component: CompetitionsComponent },
  { path: 'users', component: UsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
