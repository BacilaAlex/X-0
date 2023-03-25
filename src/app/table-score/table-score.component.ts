import { Component } from '@angular/core';

@Component({
  selector: 'app-table-score',
  templateUrl: './table-score.component.html',
  styleUrls: ['./table-score.component.css'],
})
export class TableScoreComponent {

  TableScoreComponent() { }

  player1_score: number = 0;
  player2_score: number = 0;
  player_turn: string = 'X';
  xTurn:boolean=true;
  
  // public GetPlayerTurn() {
  //   return this.player_turn
  // }
  // public SetPlayerTurn(nextTurn: string) {
  //   this.player_turn = nextTurn
  // }
}
