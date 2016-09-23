import {Component} from '@angular/core';
import {NavController, NavParams, Platform, DateTime} from 'ionic-angular';
import {Observable} from 'rxjs/Rx';
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

  ionViewLoaded(){

  }


  loadMap(){
    let location = this.addressData[0].geometry.location;

    let latLng = new google.maps.LatLng(location.lat, location.lng);

    this.lat = location.lat;
    this.lng = location.lng;

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var googleMap = new google.maps.Map(document.querySelector('#map'), mapOptions)

    this.map = googleMap;

    this.addPin();


  }

  addPin(){
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
  }

  getCoords()
  {
        this.mapService.getLocationByAddress(this.game.location)
           .subscribe(
            data => {
                      this.addressData = data["results"];
                      this.loadMap();
                      var unixTime = new Date(this.game.date + " " + this.game.time).getTime() / 1000;
                      console.log("UnixTime: ",unixTime);
                      this.weatherService.load(this.lat,this.lng,unixTime)
                      .subscribe(weatherRes =>
                        {
                          console.log(weatherRes);
                          this.weatherData = this.formatWeather(weatherRes);
                          this.weatherClass = 'weatherContent-partly-cloudy-day';
                          console.log(this.weatherData);
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
    console.log(tempData);
    tempData.summary = tempData.summary.toLowerCase().substr(0,tempData.summary.length-1);


    return tempData;
  }

}
