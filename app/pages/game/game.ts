import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';



declare var google;

@Component({
  templateUrl: 'build/pages/game/game.html'
})

export class GamePage {
  weekNo: any;
  map: any;
  address:any;
  constructor(public navCtrl: NavController, private navParams: NavParams, private http:Http) {
      this.weekNo = navParams.get('weekNo');
      this.address = navParams.get('address');
      this.getCoords(this.address);
  }

  ionViewLoaded(){
    this.loadMap();
  }

  loadMap(){


    let latLng = new google.maps.LatLng(43.095917943, -88.0745098);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  }

  getCoords(address){

    var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURI(address) + '&key=AIzaSyA2jzmSqTWeTJLmx3HAi1eiXp24XNV8DHo';
    var response = this.http.get(url).map(res => res.json());
    return response;
  }
}
