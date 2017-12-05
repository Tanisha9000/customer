import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CustomerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CustomerProvider {
public base_url:string = 'http://simerjit.crystalbiltech.com/outbuzz/api/';

  constructor(public http: Http) {
    console.log('Hello CustomerProvider Provider');
  }

}
