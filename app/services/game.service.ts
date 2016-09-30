import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class GameService{

  serviceUrl = 'http://localhost:5000/api/game';

  constructor(private _http:Http){

}

  getGames(){
    return this._http.get(this.serviceUrl)
      .map(res => res.json());
  }
}
