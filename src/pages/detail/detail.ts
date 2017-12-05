import { Component,ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { CustomerProvider} from '../../providers/customer/customer';
import {Http, Headers, RequestOptions} from '@angular/http';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ActionSheetController } from 'ionic-angular';
import { googlemaps } from 'googlemaps';
import { Geolocation } from '@ionic-native/geolocation';
import {LoadingController, ToastController} from 'ionic-angular';
import { PurchasePage } from '../purchase/purchase';
import { SignupPage } from '../signup/signup';
import { ProducerPage } from '../producer/producer';
import { ScanPage } from '../scan/scan';
import * as moment from 'moment';
import { Clipboard } from '@ionic-native/clipboard';
@IonicPage()
@Component({
selector: 'page-detail',
templateUrl: 'detail.html',
})
export class DetailPage {
public details=[]; detailss;eventsss;lats=[];vendor=[];detailsss=[];latitude;longitude;length;dista
hidebutton: number;
name: any;
arr2: any;
arr:any;
liveevent :any;
post_content: any;
vendordata :any=[]
ID: any;
unit: boolean;
lat; long; LatLong; dis;
public currentLatitude: any;
public currentLongitude: any; vanuelat; vanuelng;
autocompleteItems: any;
autocomplete: any;
acService: any;
placesService: any;
@ViewChild('map') mapElement: ElementRef;
map: any;
geocoder: any;
bit : number;
public showmore="180px";
public showmoremorepos="absolute";
public readles=1;

constructor(public navCtrl: NavController, 
public navParams: NavParams,
public customer:CustomerProvider,
private toastCtrl: ToastController,
public http:Http,
public nav : Nav,
private socialSharing: SocialSharing,
public geolocation: Geolocation,
public loadingCtrl:LoadingController,
public actionSheetCtrl: ActionSheetController,
private clipboard: Clipboard
) {
this.setview();  
if(localStorage.getItem('user_id')==null)
{
this.bit=0;
}
else{
this.bit=1;
}
}

doRefresh(refresher) {
console.log('Begin async operation', refresher);
this.setview();  
this.detail();
setTimeout(() => {
console.log('Async operation has ended');
refresher.complete();
}, 2000);
}

setview(){
var postsss={
post_id: this.navParams.get('event_id'),
getit: "update_views"
}
    console.log(postsss)
    var serialized_all = this.serializeObj(postsss);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(this.customer.base_url + 'ticket.php', serialized_all, options)
    .map(res=>res.json())
    .subscribe((dataa)=>{ 
    console.log(dataa)
})
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

ionViewDidLoad() {
this.detail()
console.log('ionViewDidLoad DetailPage');
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
mapTypeId: google.maps.MapTypeId.ROADMAP,
// gestureHandling: 'none',
draggable: false,
zoomControl: false,
scrollwheel:  false
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

poplike(post_id, status,event){
if(parseInt(status)==1){
event.target.data="assets/img/icn_heart.svg";
}
if(parseInt(status)==0){
event.target.data="assets/img/icn_heartactive.svg";
}
for(let b in this.details){
console.log(b)
if (parseInt(this.details[b].ID) == parseInt(post_id)){
this.details[b].is_liked=status
}
}
var postdata1 = {
user_id: localStorage.getItem('user_id'),
post_id: post_id,
getit: "pstlike",
status: status,
}
    var serialized_all = this.serializeObj(postdata1);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers }); 
    this.http.post(this.customer.base_url + 'user.php', serialized_all, options).map(res => res.json())
    .subscribe((data) => {
    console.log(data)
      if(data.code==1){
          var toast = this.toastCtrl.create({
            message: "Added to liked events",
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
        }
})
}

shareInfo(guid) {
let actionSheet = this.actionSheetCtrl.create({
buttons: [
{
text: 'Share to Facebook',
handler: () => {
this.socialSharing.shareViaFacebook('Below is the event link', null, guid).then(() => {
var toast = this.toastCtrl.create({
message: "Shared to facebook",
duration: 3000,
position: 'bottom'
});
toast.present();
}).catch(() => {
// alert(JSON.stringify(err))
var toast = this.toastCtrl.create({
message: "Not able to Share to facebook",
duration: 3000,
position: 'bottom'
});
toast.present();
});
}
},
{
text: 'Share to Messenger',
handler: () => {
this.socialSharing.shareViaFacebook('Below is the event link', null, guid).then(() => {
var toast = this.toastCtrl.create({
message: "Shared to Messenger",
duration: 4000,
position: 'bottom'
});
toast.present();
}).catch(() => {
var toast = this.toastCtrl.create({
message: "Not able to share to messenger",
duration: 4000,
position: 'bottom'
});
toast.present();
});
}
},
{
text: 'Share to Whatsapp',
handler: () => {
this.socialSharing.shareViaWhatsApp('Below is the event link', null, guid).then(() => {
var toast = this.toastCtrl.create({
message: "Shared to Whatsapp",
duration: 4000,
position: 'bottom'
});
toast.present();
}).catch(() => {
var toast = this.toastCtrl.create({
message: "Not able to share to whatsapp",
duration: 4000,
position: 'bottom'
});
toast.present();
});
}
},
{
text: 'Tweet',
handler: () => {
this.socialSharing.shareViaTwitter('Hey gurl! Check out this amazing app and join this amazing event!', null, guid).then(() => {
var toast = this.toastCtrl.create({
message: "Shared to Twitter",
duration: 4000,
position: 'bottom'
});
toast.present();
}).catch(() => {
var toast = this.toastCtrl.create({
message: "Not able to share to twitter",
duration: 4000,
position: 'bottom'
});
toast.present();
});
}
},
{
text: 'Copy Event Link',
handler: () => {
this.clipboard.copy(guid);
var toast = this.toastCtrl.create({
message: "link copied",
duration: 3000,
position: 'bottom'
});
toast.present();
}
},

{
text: 'Email Event',
handler: () => {
this.socialSharing.shareViaEmail(guid, 'Subject', ['recipient@example.org']).then(() => {
}).catch(() => {
});
console.log('Archive clicked');
}
},
{
text: 'Cancel',
role: 'cancel',
handler: () => {
console.log('Cancel clicked');
}
}
]
});

actionSheet.present();
}
ticket(id){ 
console.log(id)
if(this.bit == 0){
//this.navCtrl.push(SignupPage,{}, {animate: false})
this.nav.setRoot(SignupPage);
this.nav.popToRoot();
}
else{
this.navCtrl.push(PurchasePage, {
event_id: id,
},{animate: false});
} 
}

producer(idd){
this.navCtrl.push(ProducerPage,{
ID : idd,
}, {animate: false})
}

scan(iid){
this.navCtrl.push(DetailPage, {
event_id: iid,
}, {animate: false});
}
}
