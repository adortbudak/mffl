import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class MapService{
  data:any;
  constructor(private http:Http)
  {

  }

  getLocationByAddress(address) {

    var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURI(address)
      + '&key=AIzaSyA2jzmSqTWeTJLmx3HAi1eiXp24XNV8DHo';

    return this.http
      .get(url)
      .map((res:Response) => res.json());
      /*.subscribe(data=>{this.data = data;
            console.log((this.data))});*/


    //console.log("outside call" + this.data);
    //return this.data; */
  }
}
