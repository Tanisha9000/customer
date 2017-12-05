import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { CustomerProvider } from '../../providers/customer/customer';
import { Http,RequestOptions,Headers } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { GeteventsPage } from '../getevents/getevents';

@IonicPage()
@Component({
selector: 'page-loc',
templateUrl: 'loc.html',
})
export class LocPage implements OnInit{
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
val: any;
vanues: any=[];

constructor(public navCtrl: NavController, 
public navParams: NavParams,
public viewCtrl: ViewController,
public customer: CustomerProvider,
public http: Http,
public geolocation: Geolocation,)
{
this.display();
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

selectPlace(place){
console.log(place)
this.autocomplete.query=place.description;
var ID=place.place_id;
console.log(ID)
this.geocoder.geocode({'placeId': ID}, ((results, status)=>{
console.log(status)
console.log(results)
if (results[0]) 
{
this.latitude = results[0].geometry.location.lat();
this.longitude = results[0].geometry.location.lng();
console.log(this.latitude +", "+ this.longitude)
this.navCtrl.push(GeteventsPage, {
lat: this.latitude,
lng : this.longitude,
});
}
})
)
this.autocompleteItems = [];
}  

public serializeObj(obj) {
var result = [];
for (var property in obj)
result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
return result.join("&");
}

display()
{
var postdata2={
user_id : localStorage.getItem('user_id'),
getit : 'vanues',
}
    console.log(postdata2)
    var serialized_all1 = this.serializeObj(postdata2);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers : headers });
    this.http.post(this.customer.base_url + 'ticket.php', serialized_all1, options)
    .map(res=>res.json())
    .subscribe((data)=>{ 
    console.log(data)
    this.vanues = data.cities;

})
}

public geoloc(){
this.geoloction=this.geolocation.getCurrentPosition();
this.geoloction.then((resp) => {
this.lat = resp.coords.latitude;
this.long = resp.coords.longitude;
console.log(this.lat +", "+ this.long)
this.navCtrl.push(GeteventsPage, {
lat: this.lat,
lng : this.long,
},{animate:false});
}).catch((error) => {
console.log('Error getting location', error);
});
}

exactevent(lat1,long1){
console.log(lat1)
console.log(long1)
this.navCtrl.push(GeteventsPage, {
lat: lat1,
lng : long1,
},{animate:false});
}

ionViewDidLoad() {
console.log('ionViewDidLoad LocPage');
}
}
