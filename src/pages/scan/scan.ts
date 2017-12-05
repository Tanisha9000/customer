import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { CustomerProvider } from '../../providers/customer/customer';
import { RequestOptions,Headers,Http} from '@angular/http';
import { Calendar } from '@ionic-native/calendar';
import { Component,ViewChild, ElementRef } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ActionSheetController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {LoadingController} from 'ionic-angular';
import { PurchasePage } from '../purchase/purchase';
import { SignupPage } from '../signup/signup';
import { ProducerPage } from '../producer/producer';
import {TabsPage} from '../tabs/tabs';
import * as moment from 'moment';
@IonicPage()
@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
})
export class ScanPage {
liveevent :any;
hidebutton: number;
name: any;
pet="Tickets";
arr2: any;
arr:any;
post_content: any;
vendordata :any=[]
baseurll: string;
alldata: any;
public details=[];
public store:any=[];
ID: any;
unit: boolean;
lat; long; LatLong; dis;
public currentLatitude: any;
public currentLongitude: any; vanuelat; vanuelng;
autocompleteItems: any;
autocomplete: any;
acService: any;
placesService: any;
detailss;eventsss;lats=[];vendor=[];detailsss=[];latitude;longitude;length;
public dista
@ViewChild('map') mapElement: ElementRef;
map: any;
geocoder: any;
bit : number;
public showmore="120px";
public showmoremorepos="absolute";
public readles=1;

constructor(public navCtrl: NavController, 
public navParams: NavParams,
public toastCtrl: ToastController,
public customer:CustomerProvider,
public http:Http,
public calendar: Calendar,
public geolocation: Geolocation,
public loadingCtrl:LoadingController,
public actionSheetCtrl: ActionSheetController,
private socialSharing: SocialSharing,
) 
{
this.gettickets();
this.detail();
if(localStorage.getItem('user_id')==null)
{
this.bit=0;
}
else{
this.bit=1;
}

}

readmore(){
this.showmore="";
this.showmoremorepos="";
this.readles=0;
}
readless(){
this.showmore="120px";
this.showmoremorepos="absolute";
this.readles=1;
}

public serializeObj(obj) {
var result = [];
for (var property in obj)
result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
return result.join("&");
}
ngOnInit() {
this.acService = new google.maps.places.AutocompleteService();
this.geocoder = new google.maps.Geocoder();
this.autocompleteItems = [];
this.autocomplete = {
query: ''
};
}

getlocations(lat, lng) {
let headers = new Headers();
//  headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
// let options = new RequestOptions({ headers: headers });
var aa = this;
headers.append('Content-Type', 'application/json');
let options = new RequestOptions({ headers: headers });
this.geolocation.getCurrentPosition().then((resp) => {
this.currentLatitude =  resp.coords.latitude
this.currentLongitude = resp.coords.longitude
console.log(this.currentLatitude)
console.log( this.currentLongitude)
localStorage.setItem('lat1', this.currentLatitude);
localStorage.setItem('lon1', this.currentLongitude);
console.log(localStorage.getItem('lon1'))
console.log(localStorage.getItem('lat1'))
let latLng = new google.maps.LatLng(lat,lng); 
this.geocoder.geocode({'latLng': latLng}, ((results, status)=>{
if (status == google.maps.GeocoderStatus.OK) {
if (results[1]) {
this.autocomplete.query= results[1].formatted_address;
}
}
})
)
let mapOptions = {
center: latLng,
zoom: 15,
mapTypeId: google.maps.MapTypeId.ROADMAP
}; 
this.map = new google.maps.Map(aa.mapElement.nativeElement, mapOptions);
var marker = new google.maps.Marker({
position: latLng,
draggable: false,
map: this.map,
icon: 'assets/icon/pin.png',    
});
}).catch((error) => {
console.log('Error getting location', error);
});
let watch = this.geolocation.watchPosition();
watch.subscribe((data) => {
});
if(this.currentLongitude){
return this.LatLong = (this.currentLatitude, this.currentLongitude )
}
}

getdistance(lat1, lon1, lat2, lon2, unit){
var radlat1 = Math.PI * lat1/180
var radlat2 = Math.PI * lat2/180
var theta = lon1-lon2
var radtheta = Math.PI * theta/180
var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
dist = Math.acos(dist)
dist = dist * 180/Math.PI
dist = dist  * 60 * 1.1515
if (unit=="K") {  dist = dist * 1.609344 }
if (unit=="N") { dist = dist * 0.8684 }
var a= Math.round(dist)
console.log(a)
return a
}

detail(){
this.details=[];
this.detailsss=[];
var loading = this.loadingCtrl.create({
spinner: 'bubbles',
showBackdrop: false,
cssClass: 'loader'
});
loading.present()
var aa = this;
var postdata1={
user_id: localStorage.getItem('user_id'),                        
event_id: this.navParams.get('event_id'),
getit: "event_detail",
        }
    console.log(postdata1)
    this.ID=this.navParams.get('event_id')
    var serialized_all = this.serializeObj(postdata1);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(this.customer.base_url + 'user.php', serialized_all, options)
    .map(res=>res.json())
    .subscribe((dataa)=>{ 
    console.log(dataa)
    loading.dismiss()
    this.vendor=dataa.vendordata.image
    this.latitude=localStorage.getItem('lat1')
    this.longitude=localStorage.getItem('lon1')
    this.arr=dataa.vendordata;
    //  this.arr2=dataa.vendordata.meta.first_name[0];
    if(dataa.vendordata.vendorinfo != false){
    this.name=dataa.vendordata.vendorinfo.data.display_name;
}
for(let data3 of dataa.data){
if(data3.post_content.length<100){
this.hidebutton=1;
}else{
this.hidebutton=0;
}
this.details.push({
Eventimage : data3.Eventimage,
post_title:data3.post_title,
viewcount: data3.viewcount,
Eventvanue:data3.Eventvanue,
EventEndDate:data3.EventEndDate,
EventStartDate:data3.EventStartDate,
catageories :data3.catageories[0],
catageoriess :data3.catageories[1],
vanueaddress:data3.vanueaddress,
post_content:data3.post_content,
is_liked: data3.is_liked,
ID:data3.ID,
rsvpticket:data3.rsvpticket,
wooticket:data3.wooticket,
 });
this.getlocations(data3.vanuelat,data3.vanuelng);
this.vanuelat=data3.vanuelat;
this.vanuelng=data3.vanuelng;
console.log(this.latitude,this.longitude, data3.vanuelat, data3.vanuelng,)
this.unit=true;
var distance = this.getdistance(this.latitude,this.longitude, data3.vanuelat, data3.vanuelng,'K');
this.dis=distance+"KM"
}
console.log(this.details);
this.liveevent=0
for(let dataas of dataa.upcomming)
{
this.detailsss.push({
"Eventimage" : dataas.Eventimage,
"post_title":dataas.post_title,
"viewcount": dataas.viewcount,
"Eventvanue":dataas.Eventvanue,
"EventEndDate":dataas.EventEndDate,
"EventStartDate":dataas.EventStartDate,
"vanueaddress":dataas.vanueaddress,
"post_content":dataas.post_content,
"userticketcount":dataas.userticketcount,
"ID" : dataas.ID
});
var datef =  new Date();
console.log('end date'+ dataas.EventEndDate)
console.log('start date'+ dataas.EventStartDate)
var d = moment(dataas.EventEndDate).diff(datef, 'days')
console.log(d)    
var d1 =  moment(datef).diff(dataas.EventStartDate, 'days')
console.log(d1)
if(d1>0 && d>0){
this.liveevent=this.liveevent+1;
console.log(this.liveevent)
}
}
this.length= this.liveevent;
})
}

toggledis(){
this.unit=!this.unit;
if( this.unit==true){
var distances= this.getdistance(this.latitude,this.longitude,  this.vanuelat,  this.vanuelng,'N');
this.dis=distances+"MI"
}else{
var distances= this.getdistance(this.latitude,this.longitude, this.vanuelat,  this.vanuelng,'K');
this.dis=distances+"KM"
}
}

ticket(id)
{ 
console.log(id)
if(this.bit == 0){
this.navCtrl.push(SignupPage,{},{animate:false})
}
else{
this.navCtrl.push(PurchasePage, {
event_id: id,
},{animate:false});
}
}

producer(idd)
{
this.navCtrl.push(ProducerPage,{
ID : idd,
},{animate:false})
}

gettickets()
{
var toast = this.toastCtrl.create({
message: "Success! Here are your tickets to the event.",
duration: 3000,
position: 'Top'
});
toast.present();    
var postdata = {
user_id: localStorage.getItem('user_id'),
event_id :this.navParams.get('ID'),
getit: "qr_tickets",
}
    var serialized_all = this.serializeObj(postdata);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(this.customer.base_url + 'ticket.php', serialized_all, options)
    .map(res => res.json())
    .subscribe((data) => {
    console.log(data)
    if(data.events.length > 0){
    this.alldata = data.events[0];
    console.log(this.alldata) 
    }
    this.baseurll="simerjit.crystalbiltech.com/";
})
}

invoke(titlename,ticketloc,dates,datee){
this.calendar.createEventInteractively(titlename,ticketloc,'',dates,datee).then(
(msg) => { 
console.log('event added to calendar!'); 
var toast = this.toastCtrl.create({
message: "Event added to calendar",
duration: 3000,
position: 'bottom'
});
toast.present();
},
(err) => { 
console.log('Oops!Something wrong'); 
}
);
}

share(guid){
this.socialSharing.shareViaEmail(guid, 'Tickets purchased', ['recipient@example.org']).then(() => {
var toast = this.toastCtrl.create({
message: "Email sent",
duration: 3000,
position: 'bottom'
});
toast.present();
console.log('Successfully Done');

}).catch(() => {
var toast = this.toastCtrl.create({
message: 'Oops!Something wrong',
duration: 3000,
position: 'bottom'
});
toast.present();
console.log('Something is wrong');
});
}
backtohome(){
this.navCtrl.push(TabsPage,{},{animate:false});
}
}
