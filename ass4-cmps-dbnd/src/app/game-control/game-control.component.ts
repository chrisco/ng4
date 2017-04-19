import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  myInterval;
  myNum = 1;

  constructor() {}

  ngOnInit() {}

  startGame() {
    console.log('Game on');
    this.myInterval = setInterval(
      () => {
        console.log(this.myNum);
        this.myNum++;
      },
      1000
    );
  }

  endGame() {
    clearInterval(this.myInterval);
    console.log('Game off');
  }
}
