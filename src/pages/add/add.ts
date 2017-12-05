import { Component, OnInit } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams, ModalController, ViewController,Events, ToastController, ActionSheetController,Platform  } from 'ionic-angular';
import { CustomerProvider } from '../../providers/customer/customer';
import { Http, RequestOptions,Headers } from '@angular/http';
import { AddticketPage } from '../addticket/addticket';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
import { googlemaps } from 'googlemaps';
import { Geolocation } from '@ionic-native/geolocation';
import { DetailPage } from '../detail/detail';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage implements OnInit {
  newbit : any;
  min : number = 0;
  max : number = 0;
  public database: SQLite; databasequery;
  public date;
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
  public bit=1;
  enddatemin: string;
  mindate: string;
  objectdata=Object.keys;
  eventimage="assets/img/eventcreatebox.png";
  image_data="";
  name: any;
  userimage: any;
  eventsticket=[];
  eventsticket1=[];
  vanues: any;
  public data ={
    eventimage :"assets/img/eventcreatebox.png",
    post_title : '',
    post_content :'',
    eventstartdate :'',
    eventenddate :'',
    categoryy:'',
    eventcost :'',
    tag :'',
    eventvaneid: '',
  }
constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController,
    public customer: CustomerProvider,
    public http: Http,
    public events: Events,
    public toastCtrl: ToastController,
    public actionSheetCtrl: ActionSheetController,
    private camera: Camera,
    public loadingCtrl:LoadingController, 
    public datepipe: DatePipe,
    public geolocation: Geolocation,
    public sqlite: SQLite,
    private platform: Platform
   ) 
    {
      this.display();
      this.display1();
      this.dateformats();
      this.platform.ready().then(() => {
        this.database = new SQLite();
        this.databasequery = this.database.create({
          name: 'data.db',
          location: 'default'
        })
        this.select();
        this.select1();
      })
  }
select(){
this.databasequery.then((db:SQLiteObject)=>{
db.executeSql("SELECT * FROM userdata", {}).then((data) => {
console.log(data.rows.item)
let prices=[];
if(data.rows.length > 0) {
   for(var i = 0; i < data.rows.length; i++) {
     prices.push(data.rows.item(i).price);
     this.eventsticket.push({post_title: data.rows.item(i).post_title, 
          post_description: data.rows.item(i).post_description, 
          stock: data.rows.item(i).stock, 
          price: data.rows.item(i).price, 
          startdate: data.rows.item(i).startdate, 
          enddate: data.rows.item(i).enddate});
      }
      if(prices.length>1){
        this.min=Math.min.apply(null, prices);
        this.max=Math.max.apply(null, prices);
      }else{
        this.min=0;
        this.max=Math.max.apply(null, prices);
      }
      this.data.eventcost=this.min+"-"+this.max;
      this.eventsticket1 = this.eventsticket;
   }
}, (error) => {
console.log("ERROR: " + JSON.stringify(error));
});
})
}

select1(){
this.databasequery.then((db:SQLiteObject)=>{
db.executeSql("SELECT * FROM userdata1", {}).then((dataa) => {
console.log(dataa.rows.item)
if(dataa.rows.length > 0) {
  for(var i = 0; i < dataa.rows.length; i++) {
     this.data.post_title= dataa.rows.item(i).post_title;
     this.data.eventstartdate= dataa.rows.item(i).eventstartdate;
     this.data.eventenddate= dataa.rows.item(i).eventenddate;
     this.data.post_content= dataa.rows.item(i).post_content;
     this.data.categoryy= dataa.rows.item(i).categoryy;
     this.data.tag= dataa.rows.item(i).tag;
     this.autocomplete.query=dataa.rows.item(i).location_name;
     this.data.eventimage= dataa.rows.item(i).eventimage;
     this.data.eventvaneid = dataa.rows.item(i).eventvaneid;
      }
     }
}, (error) => {
console.log("ERROR: " + JSON.stringify(error));
});
})
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
updateSearch(){
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
}
})
)
 this.autocompleteItems = [];
}  

dateformats(){
this.date = new Date();
this.data.eventstartdate=this.datepipe.transform(this.date, 'y-MM-ddTH:mm');
}

setenddate(){
this.data.eventenddate=this.data.eventstartdate;
this.bit=0;
}

display1(){
var postdata1={
getit: "get_catageories",
              }

 var serialized_all = this.serializeObj(postdata1);
 let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
 let options = new RequestOptions({ headers: headers });
 this.http.post(this.customer.base_url + 'user.php', serialized_all, options)
 .map(res=>res.json())
 .subscribe((dataa)=>{ 
 console.log(dataa)
 this.name = dataa;
   });
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
  .subscribe((dataa1)=>{ 
   console.log(dataa1)
   this.vanues = dataa1.data

  })
}
    
public serializeObj(obj) {
var result = [];
for (var property in obj)
result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
return result.join("&");
}
add(fmdataa)
{
console.log(fmdataa.value)
if(fmdataa.value){
this.databasequery.then((db:SQLiteObject)=>{
db.executeSql('CREATE TABLE IF NOT EXISTS userdata1(id INTEGER PRIMARY KEY AUTOINCREMENT,post_title TEXT,post_content TEXT ,tag TEXT,eventcost INTEGER,eventstartdate TEXT,eventenddate TEXT,categoryy TEXT,location_name TEXT,eventimage TEXT,eventvaneid TEXT)', {})
.then((create)=>{
console.log(create)
// alert(fmdataa.value.post_title+"//"+fmdataa.value.post_content+"//"+fmdataa.value.tag+ "//"+fmdataa.value.eventcost+"//"+fmdataa.value.eventstartdate+"//"+fmdataa.value.eventenddate+"//"+fmdataa.value.categoryy+"//"+fmdataa.value.location_name)
db.executeSql("INSERT INTO userdata1(post_title,post_content,tag,eventcost,eventstartdate,eventenddate,categoryy,location_name,eventimage,eventvaneid) VALUES ('"+fmdataa.value.post_title+"', '"+fmdataa.value.post_content+"', '"+fmdataa.value.tag+"', '"+fmdataa.value.eventcost+"', '"+fmdataa.value.eventstartdate+"', '"+fmdataa.value.eventenddate+"', '"+fmdataa.value.categoryy+"', '"+ fmdataa.value.location_name+"','"+this.data.eventimage+"', '"+fmdataa.value.eventvaneid+"')", {})
.then((inserted)=>{
db.executeSql("SELECT * FROM userdata1", {}).then((dataa) => {
console.log(dataa.rows.item[0])
}).catch((error)=>{
console.log("error2");
console.log(error);
})
this.navCtrl.push(AddticketPage,{},{animate:false});
}).catch((error)=>{
console.log("error1")
console.log(error);
})
})
.catch((error)=>{
console.log("error0");
console.log(error)
});
})
}
}
presentActionSheet() {
const actionSheet = this.actionSheetCtrl.create({
buttons: [
{
text: 'Choose Photo',
handler: () => {
this.getPicture(0); 
}
}, {
text: 'Take Photo',
handler: () => {
this.getPicture(1); 
}
}
]
});
actionSheet.present();
}
getPicture(sourceType: number) {
// You can check the values here:
// https://github.com/driftyco/ionic-native/blob/master/src/plugins/camera.ts
this.camera.getPicture({
quality: 10,
destinationType: 0, // DATA_URL
sourceType,
allowEdit: true,
saveToPhotoAlbum: false,
correctOrientation: true,
targetHeight: 420,
targetWidth: 940,
}).then((imageData) => {
this.image_data=imageData;
this.data.eventimage='data:image/jpeg;base64,'+imageData;
//  alert(this.image_data)
}, (err) => {
var toast = this.toastCtrl.create({
message:JSON.stringify(err),
duration: 3000,
position: 'bottom'
});
toast.present();
});
}

previous(){
//  const index = this.viewCtrl.index;
if(this.navCtrl.canGoBack()){
this.newbit= localStorage.getItem('bitt');
this.newbit = 4;
localStorage.setItem('bitt',this.newbit); 
this.navCtrl.pop();
} else {
var toast = this.toastCtrl.create({
message:"Can't go back since there is no previous screen",
duration: 3000,
position: 'bottom'
});
toast.present();
}
}    
saveticket()
{
if(this.data.post_title=="" || this.data.post_title==null || this.data.post_title==undefined){
var toast = this.toastCtrl.create({
message: "Please fill the title above",
duration: 3000,
position: 'bottom'
});
toast.present();
} else if(this.data.post_content=="" || this.data.post_content==null || this.data.post_content==undefined){
var toast = this.toastCtrl.create({
message: "Please fill the content above",
duration: 3000,
position: 'bottom'
});
toast.present();
} else if(this.autocomplete.query=="" || this.autocomplete.query==null || this.autocomplete.query==undefined){
var toast = this.toastCtrl.create({
message: "Please fill the event venue above",
duration: 3000,
position: 'bottom'
});
toast.present();
} else if(this.data.eventstartdate=="" || this.data.eventstartdate==null || this.data.eventstartdate==undefined ){
var toast = this.toastCtrl.create({
message: "Please fill the start date above and check for starting and ending date",
duration: 3000,
position: 'middle'
});
toast.present();
} else if(this.data.eventenddate=="" || this.data.eventenddate==null || this.data.eventenddate==undefined){
var toast = this.toastCtrl.create({
message: "Please fill the end date above",
duration: 3000,
position: 'bottom'
});
toast.present();
} else if(this.data.eventcost=="" || this.data.eventcost==null || this.data.eventcost==undefined){
var toast = this.toastCtrl.create({
message: "Please fill the price above",
duration: 3000,
position: 'bottom'
});
toast.present();
} 
else if(this.data.tag=="" || this.data.tag==null || this.data.tag==undefined){
var toast = this.toastCtrl.create({
message: "Please fill the tag above",
duration: 3000,
position: 'bottom'
});
toast.present();
}else if(this.data.eventvaneid=="" || this.data.eventvaneid==null || this.data.eventvaneid==undefined){
var toast = this.toastCtrl.create({
message: "Please fill the tag above",
duration: 3000,
position: 'bottom'
});
toast.present();
}
else{
var d1 = moment(this.data.eventstartdate, 'MM/DD/YYYY');
var d2 = moment(this.data.eventenddate, 'MM/DD/YYYY');
var duration:any;
var fromDate = moment.utc(this.data.eventstartdate);
// duration = moment.duration({'hour':2, 'minute':15});
duration = moment.duration({'hour':0, 'minute':0});
var toDate = moment.utc(this.data.eventenddate);
console.log(fromDate.format('mmmm DD-MMM-YYYY hh:mm a'));
console.log(toDate.format('mmmm DD-MMM-YYYY hh:mm a'));
var hourDiff = toDate.diff(fromDate,'hours');
var minuteDiff = toDate.diff(fromDate,'minutes');
var hourDuration = Math.floor(minuteDiff/60);
var minuteDuration = minuteDiff % 60;
console.log(hourDuration);
console.log(minuteDuration)

if(hourDuration == 0){
var toast = this.toastCtrl.create({
message: "Please check the dates and time specified",
duration: 3000,
position: 'bottom'
});
toast.present(); 
} else {
var split = this.data.eventimage.split('base64,');
this.eventimage = split[1];
let loader=this.loadingCtrl.create({
content: 'Saving event...',
dismissOnPageChange: true,
});

var postdata3={
user_id : localStorage.getItem('user_id'),
getit : 'save_event',
post_title : this.data.post_title,
post_content : this.data.post_content

}
    console.log(postdata3)
    var serialized_all3 = this.serializeObj(postdata3);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers : headers });
    this.http.post(this.customer.base_url + 'ticket.php', serialized_all3, options)
    .map(res=>res.json())
    .subscribe((dataa)=>{ 
    console.log(dataa)
    loader.dismiss();
    // alert(this.eventimage)
    var toast = this.toastCtrl.create({
    message: "The details of event are saved",
    duration: 3000,
    position: 'bottom'
});
    toast.present();
if(this.image_data != ""){
let loader=this.loadingCtrl.create({
content: 'uploading image...',
dismissOnPageChange: true,
});

var postdata7={
getit :'save_eventimage', 
event_id :dataa.data,
image_data : this.eventimage
}
    console.log(postdata7)
    var serialized_all6 = this.serializeObj(postdata7);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers : headers });
    this.http.post(this.customer.base_url + 'ticket.php', serialized_all6, options)
    .map(res=>res.json())
    .subscribe((dataaa)=>{ 
    console.log(dataaa)
    loader.dismiss();
    this.navCtrl.push(DetailPage,{
    event_id : dataa.data
    },{animate:false});
})

}else{
var postd1={
getit :'save_defaultimg', 
event_id :dataa.data,
}
    console.log(postd1)
    var serialized_all10 = this.serializeObj(postd1);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers : headers });
    this.http.post(this.customer.base_url + 'ticket.php', serialized_all10, options)
    .map(res=>res.json())
    .subscribe((dat)=>{ 
    console.log(dat)
    this.navCtrl.push(DetailPage,{
    event_id : dataa.data
    },{animate:false});
})
}

if(this.eventsticket.length >0)
{
for(let i =0; i<this.eventsticket.length ; i++){
var postdata6={
getit :'save_ticket',
event_id:dataa.data,
post_description: this.eventsticket[i].post_description,
stock: this.eventsticket[i].stock,
price: this.eventsticket[i].price,
startdate: this.eventsticket[i].startdate,
enddate: this.eventsticket[i].enddate,
post_title: this.eventsticket[i].post_title,
}
    console.log(postdata6)
    var serialized_all30 = this.serializeObj(postdata6);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers : headers });
    this.http.post(this.customer.base_url + 'ticket.php', serialized_all30, options)
    .map(res=>res.json())
    .subscribe((dataa)=>{ 
    console.log(dataa)
    this.databasequery.then((db:SQLiteObject)=>{
    db.executeSql('DELETE FROM userdata', {})
    .then((DELETE)=>{
    console.log(DELETE)
    }).catch((error)=>{
    console.log(JSON.stringify(error))
    })
    })
})
}
}
var postdata5={
user_id : localStorage.getItem('user_id'),
getit : 'set_eve_meta',
event_id : dataa.data,
eventstartdate : this.data.eventstartdate,
eventenddate : this.data.eventenddate,
eventvaneid : this.data.eventvaneid,
eventlocation: this.autocomplete.query,
eventcost : this.data.eventcost
}
    console.log(postdata5)
    var serialized_all5 = this.serializeObj(postdata5);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers : headers });
    this.http.post(this.customer.base_url + 'ticket.php', serialized_all5, options)
    .map(res=>res.json())
    .subscribe((eventmeta)=>{ 
    console.log(eventmeta)
    this.databasequery.then((db:SQLiteObject)=>{
    db.executeSql('DELETE FROM userdata1', {})
    .then((DELETE)=>{
    console.log(DELETE)
    }).catch((error)=>{
    console.log(JSON.stringify(error))
    })
    })
    this.navCtrl.push(DetailPage,{
    event_id : dataa.data
    },{animate:false});

    })
    this.date = new Date();
    this.data ={
    eventimage :'',
    post_title : '',
    post_content :'',
    eventstartdate : this.datepipe.transform(this.date, 'y-MM-ddTH:mm'),
    eventenddate :'',
    categoryy:'',
    eventcost :'',
    tag :'',
    eventvaneid: '',

    }
    this.autocomplete.query=[];
})
}           
}
}
}
