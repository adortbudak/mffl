import { Component } from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {MapService} from "../../services/maps.service";
import {Geolocation} from 'ionic-native';


declare var google;

@Component({
  templateUrl: 'build/pages/map/map.html',
  providers: [MapService]
})


export class MapPage{

  game: any;
  addressData: any;
  error: string;
  map: any;
  lat: any;
  lng: any;
  curLat: any;
  curLng: any;


  constructor(public navCtrl: NavController, private navParams: NavParams,
              private mapService:MapService){
    this.game = navParams.get('location');
    this.getCurrentLocation();
    this.getCoords();
  }

  getCoords()
  {
    this.mapService.getLocationByAddress(this.game)
      .subscribe(
        data => {
          this.addressData = data["results"];
          this.loadMap();

        },
        error => this.error = "Address: " + this.game + " is invalid",
        () => console.log('Completed!')
      );
  }

  getCurrentLocation()
  {
    Geolocation.getCurrentPosition().then(pos => {
      this.curLat = pos.coords.latitude;
      this.curLng = pos.coords.longitude;
    }) ;
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

    var googleMap = new google.maps.Map(document.querySelector('#map'), mapOptions);

    this.map = googleMap;

    this.addPin();

    console.log(this.curLng);
  }

  addPin(){
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    var infoWindow = new google.maps.InfoWindow({
      content: this.game
    });

    google.maps.event.addListener(marker,'click',function(){
      infoWindow.open(this.map,marker);
    })
  }

}
