import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  count = 0;
  timer;
  @Output() intervalFired = new EventEmitter<{ count }>();

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    this.timer = setInterval(() => {
      this.intervalFired.emit(this.count + 1);
      this.count++;
    }, 1000);
  }

  stopGame() {
    clearInterval(this.timer);
  }
}
