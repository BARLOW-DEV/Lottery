import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lottery';
  index = 0;
  lotteryNumber = 0;

  lotteryNumbers = [[0]];

  constructor() {}


  onAddNumber(numberToAdd: number) {
    if(this.lotteryNumbers[this.lotteryNumber].length < 6) {
      this.lotteryNumbers[this.lotteryNumber].push(numberToAdd)
    } else {
      this.lotteryNumber++;
      this.lotteryNumbers[this.lotteryNumber].push(numberToAdd)
    }
  }



}
