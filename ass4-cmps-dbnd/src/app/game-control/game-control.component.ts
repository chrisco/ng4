import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  myInterval;
  myNum = 0;

  constructor() {}

  ngOnInit() {}

  onStartGame() {
    console.log('Game started');
    this.myInterval = setInterval(
      () => {
        this.intervalFired.emit(this.myNum + 1);
        this.myNum++;
      },
      1000
    );
  }

  onPauseGame() {
    clearInterval(this.myInterval);
    console.log('Game paused');
  }

  onResetGame() {
    console.log('Game over');
    clearInterval(this.myInterval);
    this.myNum = 0;
  }
}
