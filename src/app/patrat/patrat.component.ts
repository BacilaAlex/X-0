import { Component, ViewChild } from '@angular/core';
import { TableScoreComponent } from '../table-score/table-score.component';

@Component({
  selector: 'app-patrat',
  templateUrl: './patrat.component.html',
  styleUrls: ['./patrat.component.css'],
})

export class PatratComponent {
  tableScore = new TableScoreComponent

  // patrat: string[] = '';


  // AlegePatrat(buttonValue: string) {
  //   if (buttonValue == "1") {
  //     this.patrat1 = this.tableScore.player_turn
  //       (this.tableScore.xTurn) ? this.tableScore.xTurn = '0' : this.tableScore.xTurn = 'X'
  //   }
  //   if (buttonValue == "2") {
  //     this.patrat2 = this.tableScore.player_turn
  //   }
  //   if (buttonValue == "3") {
  //     this.patrat3 = this.tableScore.player_turn
  //   }
  //   if (buttonValue == "4") {
  //     this.patrat4 = this.tableScore.player_turn
  //   }
  //   if (buttonValue == "5") {
  //     this.patrat5 = this.tableScore.player_turn
  //   }
  //   if (buttonValue == "6") {
  //     this.patrat6 = this.tableScore.player_turn
  //   }
  //   if (buttonValue == "7") {
  //     this.patrat7 = this.tableScore.player_turn
  //   }
  //   if (buttonValue == "8") {
  //     this.patrat8 = this.tableScore.player_turn
  //   }
  //   if (buttonValue == "9") {
  //     this.patrat9 = this.tableScore.player_turn
  //   }
  // }

}

