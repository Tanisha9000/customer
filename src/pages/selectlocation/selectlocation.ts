import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { FormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LocationPage } from '../location/location';
import { ViewController } from 'ionic-angular';
import { googlemaps } from 'googlemaps';
import { Geolocation } from '@ionic-native/geolocation';
import { Http, Headers, RequestOptions } from '@angular/http';
import {LoadingController} from 'ionic-angular';
import { CustomerProvider} from '../../providers/customer/customer';
@IonicPage()
@Component({
  selector: 'page-selectlocation',
  templateUrl: 'selectlocation.html',
})
export class SelectlocationPage {
  lat; long;
  public currentLatitude: any;
  public currentLongitude: any;
  autocompleteItems: any;
  autocomplete: any;
  acService: any;
  placesService: any;

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  geocoder: any;
  constructor(public navCtrl: NavController,
    public customer:CustomerProvider,
    	public loadingCtrl:LoadingController,
       public http: Http, public places: ElementRef, private geolocation: Geolocation, public viewCtrl: ViewController, public navParams: NavParams, public formBuilder: FormBuilder, public events: Events) {
  this.place()
}
public placess=[];
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
 
  getlocation() {
      var loading = this.loadingCtrl.create({
      spinner: 'bubbles',
     showBackdrop: false,
     cssClass: 'loader'
  });
  loading.present()
  
    let headers = new Headers();
   
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    this.geolocation.getCurrentPosition().then((resp) => {
      this.currentLatitude = resp.coords.latitude
      this.currentLongitude = resp.coords.longitude
      console.log(this.currentLatitude)
      console.log(this.currentLongitude)
       let latLng = new google.maps.LatLng(this.currentLatitude, this.currentLongitude);

// alert("shk")
      this.geocoder.geocode({ 'latLng': latLng }, ((results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
          if (results[1]) {
            this.autocomplete.query = results[1].formatted_address;
          }
        }

      })
      )
loading.dismiss()
    }).catch((error) => {
       console.log('hii')
      console.log('Error getting location', error);
    });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      
    });
  }
  updateSearch() {
    console.log('modal > updateSearch');
    if (this.autocomplete.query == '') {
      this.autocompleteItems = [];
      return;
    }
    let self = this;
    let config = {
      //types:  ['geocode'], // other types available in the API: 'establishment', 'regions', and 'cities'
      input: this.autocomplete.query,
      componentRestrictions: {}
    }
    this.acService.getPlacePredictions(config, function (predictions, status) {
      console.log('modal > getPlacePredictions > status > ', status);
      self.autocompleteItems = [];
      predictions.forEach(function (prediction) {
        self.autocompleteItems.push(prediction);
      });
    });
  }

  loads() {
    this.navCtrl.push(LocationPage)
  }
  chooseItem(item) {
    console.log(item)
    this.autocomplete.query = item.description;
    this.autocompleteItems = [];
    localStorage.setItem('user_location', item.description);
    


  }
  place(){
     
    var postdata1={
                                     
        
                                 
      // event_id: this.navParams.get('event_id'),
      getit: "pop_places",
                                    }
                                      var serialized_all = this.serializeObj(postdata1);
                                       let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
                         let options = new RequestOptions({ headers: headers });
                         this.http.post(this.customer.base_url + 'user.php', serialized_all, options)
                        
                         
                          .map(res=>res.json())
                         .subscribe((dataa)=>{ 
                           console.log(dataa)

                     
                            for(let data3 of dataa.data){
      
            this.placess.push({
          
             "post_title":data3.post_title,
          
         

             
            });

         

   

          }
        
                
       

                         })

  }

  closeModal() {

    this.events.publish('user_location')
    console.log(this.events)
    this.viewCtrl.dismiss({
      address: this.autocomplete.query,

    });



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectlocationPage');
  }

}
