import { Component } from '@angular/core';
import { NavController, Events, ToastController,NavParams } from 'ionic-angular';
import { EditPage } from '../edit/edit';
import { SettingsPage } from '../settings/settings';
import {LoadingController} from 'ionic-angular';
import {Http, Headers, RequestOptions} from '@angular/http';
import { CustomerProvider} from '../../providers/customer/customer';
import { FormBuilder}  from '@angular/forms';
import { ScanPage } from '../scan/scan';
import { AlleventsPage } from '../allevents/allevents';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
id : boolean;
public name
public details=[];
public detailss =[];
public pet

constructor(public navCtrl: NavController, 
public events : Events, 
public toastCtrl: ToastController,
public customer:CustomerProvider,
public formBuilder: FormBuilder, 
public navParams: NavParams,	
public loadingCtrl:LoadingController,
public http:Http
){
this.gettickets();
this.pet = "Tickets";
this.getUser();
this.events.subscribe('user_updated', (res)=> {
this.getUser();
 })
this.likedevents();    
}
scan(idd){
this.navCtrl.push(ScanPage,{
ID:idd
},{animate: false});
}

editPage(){
this.navCtrl.push(EditPage,{},{animate: false});
}
edit(vendor) {
this.navCtrl.push(AlleventsPage,{
user_id : vendor
},{animate:false});
}
   
settingPage(){
this.navCtrl.push(SettingsPage,{},{animate: false});
}

doRefresh(refresher) {
console.log('Begin async operation', refresher);
this.getUser();
this.likedevents(); 
this.gettickets();
setTimeout(() => {
console.log('Async operation has ended');
refresher.complete();
}, 2000);
}

public serializeObj(obj) {
var result = [];
for (var property in obj)
result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
return result.join("&");
}

getUser() {
let loading = this.loadingCtrl.create({
spinner: 'bubbles',
showBackdrop: false,
cssClass: 'loader'
});
loading.present()
var postdata = {
user_id: localStorage.getItem('user_id'),
getit: "get_userdata",

}
    var serialized_all = this.serializeObj(postdata);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(this.customer.base_url + 'user.php', serialized_all, options)
    .map(res => res.json())
    .subscribe((response) => {
    loading.dismiss();
    console.log(response)
    // this.id = response.user_data.caps.vendor
    this.name = response
    console.log(this.name)
})
}

gettickets()
{
let loading1 = this.loadingCtrl.create({
spinner: 'bubbles',
showBackdrop: false,
cssClass: 'loader'
});
loading1.present()
this.details=[];
var postdata = {
user_id: localStorage.getItem('user_id'),
getit: "user_tickets",
}
    var serialized_all = this.serializeObj(postdata);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(this.customer.base_url + 'ticket.php', serialized_all, options)
    .map(res => res.json())
    .subscribe((data) => {
    loading1.dismiss();   
    console.log(data)
    if(data.length > 0){
    if(data.events.length>0){
    for(let data1 of data.events ){
    this.details.push({
    post_title : data1.post_title,
    Eventimage : data1.Eventimage,
    _EventStartDate : data1.event_meta._EventStartDate,
    Eventvanue : data1.Eventvanue,
    ticket : data1.ticket.length,
    ID : data1.ID

});
}
console.log(this.details)
}
}
})
}

likedevents()
{
this.detailss =[];
var postdata = {
user_id: localStorage.getItem('user_id'),
getit: "liked_events",
}
    var serialized_all = this.serializeObj(postdata);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(this.customer.base_url + 'ticket.php', serialized_all, options)
    .map(res => res.json())
    .subscribe((data) => {
    console.log(data)
    if(data.length>0){
    for(let data2 of data ){
    this.detailss.push({
    post_title : data2.post_title,
    Eventimage : data2.Eventimage,
    post_date : data2.EventStartdate,
    Eventvanue : data2.Eventvanue,
    ID : data2.ID
    });
}
console.log(this.detailss)
}
})
}

poplike(post_id) {
for(let i in this.detailss){
if(this.detailss[i].ID == post_id ){
var toast = this.toastCtrl.create({
    message: "Removed from Liked events",
    duration: 3000,
    position: 'bottom'
    });
toast.present();
this.detailss.splice(parseInt(i),1);
}
}
var postdata1 = {
user_id: localStorage.getItem('user_id'),
post_id: post_id,
getit: "pstlike",
status: 0,
}
    var serialized_all = this.serializeObj(postdata1);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers }); 
    this.http.post(this.customer.base_url + 'user.php', serialized_all, options).map(res => res.json())
    .subscribe((data) => {
    console.log(data)   
    })
}
}
