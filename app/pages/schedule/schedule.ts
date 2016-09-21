import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GamePage } from '../game/game';

@Component({
  templateUrl: 'build/pages/schedule/schedule.html'
})

export class SchedulePage {
  constructor(public navCtrl: NavController) {

  }

  displayWeek(weekNo,address){
    this.navCtrl.push(GamePage,
      {weekNo: weekNo,
        address: address}
    );
  }
}
