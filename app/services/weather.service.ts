import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {
  key: string = '3ff8e63cee83fd13ee0479be523a12e9';

  constructor(public http: Http)
  {
    this.http = http;
  }

  load(lat:String, lng:String){
    return this.http.get('https://api.darksky.net/forecast/'+this.key+'/' + lat + ','+ lng)
      .map(res => res.json());
  }
}
