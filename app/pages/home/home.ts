import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {GamePage} from "../game/game";

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  scheduleData:any
  constructor(public navCtrl: NavController) {
    this.scheduleData = [{
      "date":"08/27/16",
      "time":"09:00 AM",
      "location": "W142 N8101 Merrimac Dr, Menomonee Falls, WI 53051",
      "hometeam": "Indians",
      "opponent": "Waukesha North",
      "vsat": "at"
    },
      {
        "date":"09/10/16",
        "time":"09:00 AM",
        "location": "20760 Hunters Run, Brookfield, WI 53045",
        "opponent": "Sussex West",
        "awayteam": "Indians",
        "vsat": "at"
      },
      {
        "date":"09/17/16",
        "time":"10:00 AM",
        "location": "20760 Hunters Run, Brookfield, WI 53045",
        "opponent": "Catholic Memorial",
        "awayteam": "Indians",
        "vsat": "vs"
      },
      {
        "date":"09/24/16",
        "time":"09:00 AM",
        "location": "W142 N8101 Merrimac Dr, Menomonee Falls, WI 53051",
        "hometeam": "Indians",
        "opponent": "Waukesha West Grey",
        "vsat": "vs"
      },
      {
        "date":"10/01/16",
        "time":"09:00 AM",
        "location": "20760 Hunters Run, Brookfield, WI 53045",
        "opponent": "South Milwaukee",
        "awayteam": "Indians",
        "vsat": "at"
      },
      {
        "date":"10/08/16",
        "time":"10:00 AM",
        "location": "20760 Hunters Run, Brookfield, WI 53045",
        "opponent": "Kettle Moraine",
        "awayteam": "Indians",
        "vsat": "vs"
      }]


  }

  displayWeek(game){
    this.navCtrl.push(GamePage,{game: game});
  }
}
