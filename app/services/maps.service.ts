import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class MapService{
  apiKey = 'AIzaSyA2jzmSqTWeTJLmx3HAi1eiXp24XNV8DHo';
  apiUrl = 'https://maps.googleapis.com/maps/api/geocode/json?';

  constructor(private http:Http)  {
  }

  getLocationByAddress(address) {

    var url = this.apiUrl + 'address=' + encodeURI(address) + '&key=' + this.apiKey;

    console.log(url);

    return this.http
      .get(url)
      .map((res:Response) => res.json());
  }
}
