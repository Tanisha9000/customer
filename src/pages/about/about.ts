import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import {LoadingController} from 'ionic-angular';
import { googlemaps } from 'googlemaps';
import { Geolocation } from '@ionic-native/geolocation';
import { CustomerProvider} from '../../providers/customer/customer';
import { GeteventsPage } from '../getevents/getevents';
import { CategoryeventPage } from '../categoryevent/categoryevent';
import { LocPage } from '../loc/loc';
import { DetailPage } from '../detail/detail';

@Component({
selector: 'page-about',
templateUrl: 'about.html'
})
export class AboutPage implements OnInit
{
objectdata=Object.keys;
// geocoder: any;
infowindow: google.maps.InfoWindow;
val: any;
itemss: any;
name: any;
autocompleteItems: any;
autocomplete: any;
acService:any;
placesService: any;
[x: string]: any;
searchQuery: string = '';
items: string[];
places: any = [];
geoloction;
latitude: number = 0;
longitude: number = 0;
public details=[];
public callback =[];
geo: any
constructor(
public navCtrl: NavController,
public http: Http,
public geolocation: Geolocation,	
public customer:CustomerProvider,
public loadingCtrl:LoadingController,) 
{
 this.display();
} 

dismiss(){
this.itemss = []
}  

public serializeObj(obj) {
var result = [];
for (var property in obj)
result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
return result.join("&");
}
display(){
var loading = this.loadingCtrl.create({
spinner: 'bubbles',
showBackdrop: false,
cssClass: 'loader'
});
loading.present()
var postdata1={
getit: "get_catageories",
}
       var serialized_all = this.serializeObj(postdata1);
       let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
       let options = new RequestOptions({ headers: headers });
       this.http.post(this.customer.base_url + 'user.php', serialized_all, options)
       .map(res=>res.json())
       .subscribe((dataa)=>{ 
       loading.dismiss();
       console.log(dataa)
       this.name = dataa;
       });
    }

onKey(event :any){
var postdata={
getit : 'searchevents',
search : this.val
}
     console.log(postdata)
     var serialized_all1 = this.serializeObj(postdata);
     let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
     let options = new RequestOptions({ headers : headers });
     this.http.post(this.customer.base_url + 'ticket.php', serialized_all1, options)
     .map(res=>res.json())
     .subscribe((dataa)=>{ 
      console.log(dataa)
     this.itemss = dataa
      })
}

exactevent(id,name1){
console.log(name1)
console.log(id)
this.navCtrl.push(CategoryeventPage, {
term_taxonomy_id: id,
title : name1
});
}

ngOnInit(){
this.acService = new google.maps.places.AutocompleteService();   
// this.placesService = new google.maps.places.PlacesService(this);   
this.infowindow = new google.maps.InfoWindow;
this.geocoder = new google.maps.Geocoder;
this.autocompleteItems = [];
this.autocomplete = {
query: ''
};       
}
updateSearch() {
console.log('modal > updateSearch');
if (this.autocomplete.query == '') {
this.autocompleteItems = [];
return;
}
let self = this; 
let config = { 
input: this.autocomplete.query, 
componentRestrictions: {  } 
}
this.acService.getPlacePredictions(config, function (predictions, status) {
console.log('modal > getPlacePredictions > status > ', status);
self.autocompleteItems = [];            
predictions.forEach(function (prediction) {              
self.autocompleteItems.push(prediction);
});
});
console.log(this.autocompleteItems);
}

selectPlace(iddd){
this.val=''
this.itemss = [];
this.navCtrl.push(DetailPage, {
  event_id: iddd,
}, {animate: false});
}

public geoloc(){
this.navCtrl.push(LocPage,{},{animate: false});
}

ionViewDidLoad() {
console.log('ionViewDidLoad LocationPage');
}

}

