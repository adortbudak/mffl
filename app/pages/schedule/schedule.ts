import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/schedule/schedule.html'
})

export class SchedulePage {
  constructor(public navCtrl: NavController) {

  }

  displayWeek(weekNo){
    alert(weekNo);
  }
}
