import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { NavController, Nav, Platform, ToastController, Events, ModalController, Slides, App } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { Geolocation } from '@ionic-native/geolocation';
import { LocationPage } from '../location/location';
import { SelectlocationPage } from '../selectlocation/selectlocation';
import { CustomerProvider } from '../../providers/customer/customer';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ActionSheetController } from 'ionic-angular';
import { googlemaps } from 'googlemaps';
import { AboutPage } from '../about/about';
import { Clipboard } from '@ionic-native/clipboard';
import { LocPage } from '../loc/loc';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
url1: any;
showlike: number;
venueadd: any;
likess: any;
data: any;
code: any;
likes: any;
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
pet = "up_event";
slides:any=[this.pet]
public eventss = []; even = []; length; locate; week = []; vanue; vanuess;
public totalpages = 0;
public i = 0;
public hasMoreData = true;
public event_type;
public venue;
public type;
constructor(
private toastCtrl: ToastController,
private alertCtrl: AlertController,
public customer: CustomerProvider,
private socialSharing: SocialSharing,
public loadingCtrl: LoadingController,
public modalCtrl: ModalController,
public http: Http,
public navCtrl: NavController,
public nav : Nav,
public actionSheetCtrl: ActionSheetController,
public events: Events,
public geolocation: Geolocation,
public platform: Platform,
private clipboard: Clipboard,
public app: App
) {
  this.getevents(this.pet);
  this.getlocations();
}
doRefresh(refresher) {
console.log('Begin async operation', refresher);
this.getevents(this.pet);
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
  console.log(results)
if (status == google.maps.GeocoderStatus.OK) {
  if (results[1]) {
    this.autocomplete.query = results[1].address_components[2].long_name;
    console.log( this.autocomplete.query)
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

getevents(eventtype) {
// alert(eventtype)
this.eventss = [];
console.log(eventtype)
this.i = 0
this.event_type = eventtype;
this.hasMoreData = true;
this.fetchevents();
}

fetchevents() {
console.log(this.event_type)
return new Promise(resolve => {
  var loading = this.loadingCtrl.create({
    spinner: 'bubbles',
    showBackdrop: false,
    cssClass: 'loader'
  });
loading.present()  
this.geolocation.getCurrentPosition().then((resp) => {
this.currentLatitude = resp.coords.latitude
this.currentLongitude = resp.coords.longitude
this.i++;

var postdata1 = {
      user_id: localStorage.getItem('user_id'),
      page: this.i,
      getit: this.event_type,
      lat: this.currentLatitude,
      lng: this.currentLongitude,
 }
    console.log(postdata1);
    console.log(this.hasMoreData)
    var serialized_all = this.serializeObj(postdata1);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(this.customer.base_url + 'user.php', serialized_all, options)
    .map(res => res.json())
    .subscribe((data) => {
    loading.dismiss();
    console.log(data);
    if(data.data.length > 0){
    this.totalpages = data.totalpages;
    for (let even in data.data) {
    console.log(data.data[even])
    // this.venueadd = data.data[even].vanueaddress
    this.eventss.push(data.data[even])
    }
    resolve(true);
    console.log(this.eventss)
    }
})
  })
 }).catch((message) => {
var toast = this.toastCtrl.create({
  message: "No events found at this time",
  duration: 4000,
  position: 'middle'
});
toast.present();
});
}

detailPage(id) {
console.log(id)
this.nav.push(DetailPage,{event_id: id},{animate:false});
}
 
poplike(post_id, status, event) {
console.log(event)
if(parseInt(status)==1){
event.target.data="assets/img/icn_heart.svg";
}
if(parseInt(status)==0){
event.target.data="assets/img/icn_heartactive.svg";
}
for(let b in this.eventss) {
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
            message: "Added to liked events",
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
        }
    })
  }

swipeEvent(e) {
if(e.direction == '2'){
if(this.pet=="up_event"){
 this.pet="weekendevents";
 this.getevents("weekendevents")
}else if(this.pet=="pop_event"){
 this.pet="up_event";
 this.getevents("up_event")
}
}
else if(e.direction == '4'){

if(this.pet=="up_event"){
 this.pet="pop_event";
 this.getevents("pop_event")
}else if(this.pet=="weekendevents"){
 this.pet="up_event";
 this.getevents("up_event")
}
}
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
    duration: 3000,
    position: 'bottom'
    });
    toast.present();
    }).catch(() => {
    var toast = this.toastCtrl.create({
    message: "Not able to share to messenger",
    duration: 3000,
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
    duration: 3000,
    position: 'bottom'
    });
    toast.present();

    }).catch(() => {
    var toast = this.toastCtrl.create({
    message: "Not able to share to whatsapp",
    duration: 3000,
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
    duration: 3000,
    position: 'bottom'
    });
    toast.present();
    }).catch(() => {
    var toast = this.toastCtrl.create({
    message: "Not able to share to twitter",
    duration: 3000,
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

// }

pressed(vanueaddress){
    const alert = this.alertCtrl.create({
    title: vanueaddress ,
    buttons: ['OK']
    });
    alert.present();
}

discover(){
this.navCtrl.push(AboutPage,{},{animate: false});
}
direct(){
this.navCtrl.push(LocPage,{},{animate: false});
}

}
