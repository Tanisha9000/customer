import { IonicPage, NavParams } from 'ionic-angular';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform, ToastController, Events, ModalController, Slides } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { Geolocation } from '@ionic-native/geolocation';
import { LocationPage } from '../location/location';
import { SelectlocationPage } from '../selectlocation/selectlocation';
import { CustomerProvider } from '../../providers/customer/customer';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ActionSheetController, Nav } from 'ionic-angular';
import { googlemaps } from 'googlemaps';
import { AboutPage } from '../about/about';
import { Clipboard } from '@ionic-native/clipboard';
import { EditpagePage } from '../editpage/editpage';

@IonicPage()
@Component({
selector: 'page-allevents',
templateUrl: 'allevents.html',
})
export class AlleventsPage {
eventss: any[];
all_events:any=[];
url1: any;
showlike: number;
lat; long;
public currentLatitude: any;
public currentLongitude: any;
autocompleteItems: any;
autocomplete: any;
acService: any;
placesService: any;
@ViewChild('map') mapElement: ElementRef;
@ViewChild('mySlider') slider: Slides;
map: any;
geocoder: any;
public totalpages = 0;
public i = 0;
public hasMoreData = true;
public type;

constructor(public navCtrl: NavController, 
public navParams: NavParams,
private toastCtrl: ToastController,
private alertCtrl: AlertController,
public customer: CustomerProvider,
private socialSharing: SocialSharing,
public loadingCtrl: LoadingController,
public modalCtrl: ModalController,
public http: Http,
public actionSheetCtrl: ActionSheetController,
public events: Events,
public geolocation: Geolocation,
public platform: Platform,
private clipboard: Clipboard,
public nav : Nav,
){
this.getlocations();
this.getevents("come");
}
doRefresh(refresher) {
console.log('Begin async operation', refresher);
this.getlocations();
setTimeout(() => {
console.log('Async operation has ended');
refresher.complete();
}, 2000);
} 

ngOnInit() {
this.acService = new google.maps.places.AutocompleteService();
this.geocoder = new google.maps.Geocoder();
this.autocompleteItems = [];
this.autocomplete = {
query: ''
};
if(localStorage.getItem('user_id')==null){
this.showlike=0;
}else{
this.showlike=1;
}
}
public serializeObj(obj) {
var result = [];
for (var property in obj)
result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
return result.join("&");
}

getlocations() {
let headers = new Headers();
headers.append('Content-Type', 'application/json');
let options = new RequestOptions({ headers: headers });
this.geolocation.getCurrentPosition().then((resp) => {
this.currentLatitude = resp.coords.latitude
this.currentLongitude = resp.coords.longitude
console.log(this.currentLatitude)
console.log(this.currentLongitude)
let latLng = new google.maps.LatLng(this.currentLatitude, this.currentLongitude);
this.geocoder.geocode({ 'latLng': latLng }, ((results, status) => {
if (status == google.maps.GeocoderStatus.OK) {
if (results[1]) {
this.autocomplete.query = results[1].formatted_address;
// alert( this.autocomplete.query)
this.type = this.autocomplete.query
}
}
})
)
}).catch((error) => {
console.log('hii')
console.log('Error getting location', error);
});
let watch = this.geolocation.watchPosition();
watch.subscribe((data) => {
});
}

getevents(come) {
this.eventss = [];
console.log(come)
this.i = 0
this.hasMoreData = true;
this.searchresult();
} 
   
searchresult(){
var loading = this.loadingCtrl.create({
spinner: 'bubbles',
showBackdrop: false,
cssClass: 'loader'
});
loading.present()
return new Promise(resolve => {
this.i++;
var postdata={
getit: 'user_events', 
page :  this.i,
user_id : localStorage.getItem('user_id'),
           }
    console.log(postdata)     
    var serialized_all = this.serializeObj(postdata);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(this.customer.base_url + 'user.php', serialized_all, options)
    .map(res=>res.json())
    .subscribe((dataa)=>{ 
    loading.dismiss();
    console.log(dataa)
    this.all_events=dataa.data
    for (let even in dataa.data) {
    this.eventss.push(dataa.data[even])
      }
    console.log(this.eventss)
     })
    })
}

next(idd){
this.nav.push(EditpagePage,{
ID:idd
},{animate: false});
} 
               
ionViewDidLoad() {
console.log('ionViewDidLoad AlleventsPage');
}
}
