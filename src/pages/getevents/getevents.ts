import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Platform, ToastController, Events, ModalController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { Geolocation } from '@ionic-native/geolocation';
import { CustomerProvider } from '../../providers/customer/customer';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ActionSheetController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { Clipboard } from '@ionic-native/clipboard';
@IonicPage()
@Component({
  selector: 'page-getevents',
  templateUrl: 'getevents.html',
})
export class GeteventsPage {
venueadd: any;
likess: any;
data: any;
code: any;
likes: any;
showlike : number;
lat; long;
public currentLatitude: any;
public currentLongitude: any;
autocompleteItems: any;
autocomplete: any;
acService: any;
placesService: any;
public latitude;
public longitude;
public eventss = []; even = []; locate; week = []; vanue; vanuess;
public totalpages = 0;
public i = 0;
public hasMoreData = true;
public event_type;
public all_events;
public type
public names
public venue;
@ViewChild('map') mapElement: ElementRef;
map: any;
geocoder: any;

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
) {
this.searchresult();
this.getlocations();
}

doRefresh(refresher) {
console.log('Begin async operation', refresher);
this.searchresult();
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
// console.log('hii')
console.log('Error getting location', error);
});
let watch = this.geolocation.watchPosition();
watch.subscribe((data) => {

});
}
searchresult(){
var loading = this.loadingCtrl.create({
spinner: 'bubbles',
showBackdrop: false,
cssClass: 'loader'
});
loading.present()
this.latitude = this.navParams.get('lat');
this.longitude = this.navParams.get('lng');
console.log(this.latitude)
console.log(this.longitude)
var postdata1={
getit: 'loc_events', 
lat: this.latitude,
lng : this.longitude, 
user_id :  localStorage.getItem('user_id'),
}
    var serialized_all = this.serializeObj(postdata1);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(this.customer.base_url + 'user.php', serialized_all, options)
    .map(res=>res.json())
    .subscribe((dataa)=>{ 
    loading.dismiss();
    console.log(dataa)
    if(dataa.length == 0){
    var toast = this.toastCtrl.create({
    message: 'No such event for this particular category',
    duration: 4000,
    position: 'middle',
    });
    toast.present();
    }else{
    this.all_events=dataa
    for (let even in dataa) {
    //  this.venueadd = dataa[even].vanueaddress
     this.eventss.push(dataa[even])
    }
    console.log(this.eventss)
    }
})
}

detailPage(id) {
console.log(id)
this.nav.push(DetailPage, {
event_id: id,
},{animate: false});
}

poplike(post_id, status, event) {
console.log(event)
if(parseInt(status)==1){
event.target.data="assets/img/icn_heart.svg";
}
if(parseInt(status)==0){
event.target.data="assets/img/icn_heartactive.svg";
}
for (let b in this.eventss) {
console.log(b)
if (parseInt(this.eventss[b].ID) == parseInt(post_id)) {
this.eventss[b].is_liked=status
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
       message: "Added",
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
duration: 4000,
position: 'bottom'
});
toast.present();
}).catch(() => {
// alert(JSON.stringify(err))
var toast = this.toastCtrl.create({
message: "Not able to Share to facebook",
duration: 4000,
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
duration: 5000,
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
duration: 5000,
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
duration: 5000,
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

// Share via email
this.socialSharing.shareViaEmail(guid, 'Subject', ['recipient@example.org']).then(() => {
// Success!
}).catch(() => {
// Error!
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
// public doInfinite(infiniteScroll: any) {
//   console.log(infiniteScroll)
//   this.fetchevents().then(() => {
//     console.log(this.totalpages + "//" + this.i)
//     if (this.i >= this.totalpages) {
//       this.hasMoreData = false;
//     } else {
//       this.hasMoreData = true;
//       infiniteScroll.complete();
//     }
//   });
//   }
pressed(vanueaddress){
const alert = this.alertCtrl.create({
title: vanueaddress ,
buttons: ['Dismiss']
});
alert.present();
}

discover(){
this.navCtrl.push(AboutPage);
}
ionViewDidLoad() {
console.log('ionViewDidLoad GeteventsPage');
}
}