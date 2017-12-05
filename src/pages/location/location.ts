import { Component,ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform ,ToastController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { HomePage } from '../home/home';
//import {googlemaps} from 'googlemaps';
 import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, CameraPosition, MarkerOptions, Marker, Geocoder } from '@ionic-native/google-maps';
declare var google: any;

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {
 public latitude; longitude;

    @ViewChild('map') mapElement;
   map: any;

  constructor( private toastCtrl: ToastController,public navCtrl: NavController, public geolocation: Geolocation,public googleMaps: GoogleMaps,public platform: Platform) {
  }
     ngAfterViewInit() {
    console.log('hitted')
    this.loadMap();
  }
 loadMap() {
    
        var aa = this;
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      console.log(resp);
      console.log(resp.coords.longitude);
      //  alert(resp.coords.latitude);
      //  alert(resp.coords.longitude);
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      console.log(this.latitude);
      let latLng = new google.maps.LatLng(this.latitude, this.longitude);

      let mapOptions = {
        
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
       
      };
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      
      var marker = new google.maps.Marker({
        
        position: latLng,
        map: this.map,
      });
// var setDiv= new google.maps.setCompassEnabled({
//   enabled: true,
// })
 
  // domNode: any,

      // alert(this.latitude+'/'+this.longitude);
      console.log(this.map )
    }).catch((error) => {
      console.log('Error getting location', error);
      alert(error)
      let toast = aa.toastCtrl.create({
        message: 'Please on your location',
        duration: 3000,
        cssClass: 'toastCss',
        position: 'bottom',
      });
      toast.present();
     // this.diagnostic.switchToLocationSettings();
    });

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationPage');
  }

}
