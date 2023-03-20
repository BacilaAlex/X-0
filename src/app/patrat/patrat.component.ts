import { Component } from '@angular/core';

@Component({
  selector: 'app-patrat',
  templateUrl: './patrat.component.html',
  styleUrls: ['./patrat.component.css'],
})
export class PatratComponent {
  triunghi: number = 0;
  patrat: string = '';
  culoare = 'blue';
  hiddenDiv: boolean = false;

  ceva() {
    if (this.triunghi > 10) this.triunghi++;
  }
}
