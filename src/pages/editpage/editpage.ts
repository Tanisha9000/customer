import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams, ModalController, ViewController,Events, ToastController, ActionSheetController, Nav  } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { CustomerProvider } from '../../providers/customer/customer';
import { Http, RequestOptions,Headers } from '@angular/http';
import { FormBuilder } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
import { DetailPage } from '../detail/detail';
@IonicPage()
@Component({
  selector: 'page-editpage',
  templateUrl: 'editpage.html',
})
export class EditpagePage {
public date;
ID: any;
details: any=[];
public bit=1;
objectdata=Object.keys;
enddatemin: string;
mindate: string;
eventimage="assets/img/event1.jpg";
image_data="";
name: any=[];
userimage: any;
vanues: any;
public data ={
post_title : '',
post_content :'',
eventvaneid :'',
eventstartdate :'',
eventenddate :'',
categoryy:'',
eventcost :'',
user_id :'',
eventimage :''

}
constructor(public navCtrl: NavController, 
public navParams: NavParams,
private barcodeScanner: BarcodeScanner,
public modalCtrl: ModalController,
public viewCtrl: ViewController,
public customer: CustomerProvider,
public http: Http,
private formBuilder: FormBuilder,
public events: Events,
public toastCtrl: ToastController,
public actionSheetCtrl: ActionSheetController,
private camera: Camera,
public loadingCtrl:LoadingController, 
public datepipe: DatePipe,
public nav : Nav,) 
{
this.display();
this.getevent();
}
doRefresh(refresher) {
console.log('Begin async operation', refresher);
this.getevent();
setTimeout(() => {
console.log('Async operation has ended');
refresher.complete();
}, 2000);
} 
setenddate(){
this.data.eventenddate=this.data.eventstartdate;
this.bit=0;
}
public serializeObj(obj){
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
    .subscribe((dataa)=>{ 
    console.log(dataa)
    this.vanues = dataa.data
})
}

getevent(){
let loading = this.loadingCtrl.create({
spinner: 'bubbles',
showBackdrop: false,
cssClass: 'loader'
});
loading.present()
var aa = this;
var postdata1={
user_id: localStorage.getItem('user_id'),                        
event_id: this.navParams.get('ID'),
getit: "event_detail",
}
console.log(postdata1)
    var serialized_all = this.serializeObj(postdata1);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(this.customer.base_url + 'user.php', serialized_all, options)
    .map(res=>res.json())
    .subscribe((dataa)=>{ 
    console.log(dataa)
    loading.dismiss()
    if(dataa.data[0].Eventpostmeta._EventCost.length >0){
    //                            alert(dataa.data[0].Eventpostmeta._EventCost[0])
    this.data.eventcost =dataa.data[0].Eventpostmeta._EventCost[0];
    }
    this.data.eventimage = dataa.data[0].Eventimage;
    this.data.post_title= dataa.data[0].post_title;
    this.data.eventvaneid = dataa.data[0].Eventvanue;
    console.log('hk');
    console.log(this.vanues[0].ID);
    console.log(this.data.eventvaneid);
    console.log('hk');
    this.data.eventenddate= this.datepipe.transform(dataa.data[0].EventEndDate, 'y-MM-ddTH:mm');
    this.data.eventstartdate=this.datepipe.transform(dataa.data[0].EventStartDate, 'y-MM-ddTH:mm');
    this.data.post_content= dataa.data[0].post_content;
})
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

save()
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
} else if(this.data.eventvaneid=="" || this.data.eventvaneid==null || this.data.eventvaneid==undefined){
var toast = this.toastCtrl.create({
message: "Please fill the event venue above",
duration: 4000,
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
} else{
let loading1 = this.loadingCtrl.create({
spinner: 'bubbles',
showBackdrop: false,
cssClass: 'loader'
});
loading1.present()
return new Promise(resolve => {
var postdata5={
user_id : localStorage.getItem('user_id'),
getit : 'edit_event',
event_id : this.navParams.get('ID'),
eventstartdate : this.data.eventstartdate,
eventenddate : this.data.eventenddate,
eventvaneid : this.data.eventvaneid,
eventcost : this.data.eventcost,
post_title : this.data.post_title,
post_content : this.data.post_content
}
    console.log(postdata5)
    var serialized_all2 = this.serializeObj(postdata5);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers : headers });
    this.http.post(this.customer.base_url + 'user.php', serialized_all2, options)
    .map(res=>res.json())
    .subscribe((dataaa)=>{ 
    loading1.dismiss();
    console.log(dataaa)
    if(this.image_data != ""){
    // alert(this.image_data) 
    let loader=this.loadingCtrl.create({
    content: 'uploading image...',
    });
var postdata7={
getit :'save_eventimage', 
event_id :this.navParams.get('ID'),
image_data : this.image_data
}
    console.log(postdata7)
    var serialized_all6 = this.serializeObj(postdata7);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers : headers });
    this.http.post(this.customer.base_url + 'ticket.php', serialized_all6, options)
    .map(res=>res.json())
    .subscribe((dataa)=>{ 
    console.log(dataa)
    loader.dismiss();
    this.navCtrl.push(DetailPage,{
    event_id : this.navParams.get('ID')
    },{animate:false});
})
}else{
var postd1={
getit :'save_defaultimg', 
event_id :this.navParams.get('ID'),

}
    console.log(postd1)
    var serialized_all10 = this.serializeObj(postd1);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers : headers });
    this.http.post(this.customer.base_url + 'ticket.php', serialized_all10, options)
    .map(res=>res.json())
    .subscribe((dat)=>{ 
    console.log(dat)
    this.nav.push(DetailPage,{
    event_id : this.navParams.get('ID')
    },{animate:false});
    })
    }
})
this.date = new Date();
this.data ={
post_title : '',
post_content :'',
eventvaneid :'',
eventstartdate : this.datepipe.transform(this.date, 'y-MM-ddTH:mm'),
eventenddate :'',
categoryy:'',
eventcost :'',
user_id :'',
eventimage :''
}
})
}
}
}

ionViewDidLoad() {
console.log('ionViewDidLoad EditpagePage');
}
}
