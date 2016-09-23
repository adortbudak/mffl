import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {
  key: string = '3ff8e63cee83fd13ee0479be523a12e9';

  constructor(private http: Http)  {
  }

  load(lat:String, lng:String, date){
    var url = 'https://api.darksky.net/forecast/' + this.key + '/' + lat + ','+ lng + ',' + date;
    console.log(url);
    return this.http.get(url)
      .map(res => res.json());
  }
}
