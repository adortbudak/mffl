import {Component} from '@angular/core';
import {NavController, NavParams, Platform} from 'ionic-angular';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {MapService} from "../../services/maps.service";



declare var google;

@Component({
  templateUrl: 'build/pages/game/game.html',
  providers: [MapService]
})

export class GamePage {
  weekNo: any;
  map: any;
  address:any;
  addressData;
  error:any;

  constructor(public navCtrl: NavController, private navParams: NavParams,
                private mapService:MapService,private platform: Platform) {
      this.weekNo = navParams.get('weekNo');
      this.address = navParams.get('address');
  }

  ionViewLoaded(){
    this.getCoords();
  }

  initializeMap() {

    this.platform.ready().then(() => {

      let locationOptions = {timeout: 10000, enableHighAccuracy: true};

      navigator.geolocation.getCurrentPosition(

        (position) => {

          let options = {
            center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          }

          this.map = new google.maps.Map(document.getElementById("map"), options);
        },

        (error) => {
          console.log(error);
        }, locationOptions
      );
    });
  }

  loadMap(){
    let location = this.addressData[0].geometry.location;

    let latLng = new google.maps.LatLng(location.lat, location.lng);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  }

  getCoords()
  {
        this.mapService.getLocationByAddress(this.address)
           .subscribe(
            data => {
                      this.addressData = data["results"];
                      this.loadMap();
                    },
            error => this.error = "Address: " + this.address + " is invalid",
            () => console.log('Completed!')
          );
  }

}
