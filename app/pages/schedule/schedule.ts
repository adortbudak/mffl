import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GamePage } from '../game/game';

@Component({
  templateUrl: 'build/pages/schedule/schedule.html'
})

export class SchedulePage {
  scheduleData:any
  constructor(public navCtrl: NavController) {
    this.scheduleData = [{
      "date":"09/24/16",
      "time":"09:00 AM",
      "location": "W142 N8101 Merrimac Dr, Menomonee Falls, WI 53051",
      "hometeam": "Indians-Maroon",
      "awayteam": "WWG"
    },
      {
        "date":"10/01/16",
        "time":"09:00 AM",
        "location": "20760 Hunters Run, Brookfield, WI 53045",
        "hometeam": "SM",
        "awayteam": "Indians-Maroon"
      }]


  }

  displayWeek(game){
    this.navCtrl.push(GamePage,{game: game});
  }
}
