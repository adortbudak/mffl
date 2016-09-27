import {Component} from '@angular/core';
import {NavController, NavParams, Platform} from 'ionic-angular';
import 'rxjs/add/operator/map';
import {MapService} from "../../services/maps.service";
import {WeatherService} from "../../services/weather.service";



declare var google;

@Component({
  templateUrl: 'build/pages/game/game.html',
  providers: [MapService,WeatherService]
})

export class GamePage {
  game: any;
  map: any;
  address:any;
  addressData;
  error:any;
  weatherData:any;
  public lat:any;
  public lng:any;
  weatherClass: any;

  constructor(public navCtrl: NavController, private navParams: NavParams,
                private mapService:MapService,private platform: Platform,
                private weatherService: WeatherService) {
      this.game = navParams.get('game');
      this.getCoords();
  }

  getCoords()
  {
        this.mapService.getLocationByAddress(this.game.location)
           .subscribe(
            data => {
                      this.addressData = data["results"];
                      var unixTime = new Date(this.game.date + " " + this.game.time).getTime() / 1000;
                      this.weatherService.load(this.addressData[0].geometry.location.lat,
                        this.addressData[0].geometry.location.lng,unixTime)
                      .subscribe(weatherRes =>
                        {
                          this.weatherData = this.formatWeather(weatherRes);
                          this.weatherClass = 'weatherContent-partly-cloudy-day';
                        }
                      );
                    },
            error => this.error = "Address: " + this.address + " is invalid",
            () => console.log('Completed!')
          );
  }

  formatWeather(data)
  {
    let tempData: any = data.daily.data[0];
    tempData.summary = tempData.summary.toLowerCase().substr(0,tempData.summary.length-1);
    tempData.precipate = tempData.precipProbability.toString();
    tempData.temp = tempData.temperatureMax.toString();


    return tempData;
  }



}
