import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {GamePage} from "../game/game";
import {GameService} from "../../services/game.service";

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers:[GameService]

})
export class HomePage {
  scheduleData:any
  constructor(public navCtrl: NavController, private _gameService:GameService) {
    this.getData();
    this._gameService.getGames().
      subscribe(data=>{
        this.scheduleData = data;
    });
  }

  displayWeek(game){
    this.navCtrl.push(GamePage,{game: game});
  }

  getData(){

  }
}
