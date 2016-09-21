import {Component, ViewChild, ElementRef,NgZone} from '@angular/core';
import {NavController, NavParams, Platform} from 'ionic-angular';
import {GoogleMap, GoogleMapsEvent, GoogleMapsLatLng} from 'ionic-native';


declare var google;

@Component({
  templateUrl: 'build/pages/game/game.html'
})

export class GamePage {
  weekNo: any;
  map: any;
  address:any;
  constructor(public navCtrl: NavController, private navParams: NavParams) {
      this.weekNo = navParams.get('weekNo');
      this.address = navParams.get('address');
  }

  ionViewLoaded(){
    this.loadMap();
  }

  loadMap(){

    let latLng = new google.maps.LatLng(-34.9290, 138.6010);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  }
}
