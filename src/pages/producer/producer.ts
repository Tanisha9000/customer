import { Component } from '@angular/core';
import { NavController, Events, ToastController,NavParams } from 'ionic-angular';
import { EditPage } from '../edit/edit';
import { SettingsPage } from '../settings/settings';
import {LoadingController} from 'ionic-angular';
import {Http, Headers, RequestOptions} from '@angular/http';
import { CustomerProvider} from '../../providers/customer/customer';
import { FormBuilder}  from '@angular/forms';
import { DetailPage } from '../detail/detail';
import { AlleventsPage } from '../allevents/allevents';
@Component({
  selector: 'page-producer',
  templateUrl: 'producer.html'
})
export class ProducerPage {
public details=[]
public arr1=[]
public usrid;
public pet
public vendorid;
public name
constructor(public navCtrl: NavController, 
public events : Events, 
public toastCtrl: ToastController,
public customer:CustomerProvider,
public formBuilder: FormBuilder, 
public navParams: NavParams,	
public loadingCtrl:LoadingController,
public http:Http
) {
this.pet ="Upcoming";
this.getUser();
this.upevent();
this.pastevent();
this.usrid =localStorage.getItem('user_id');
this.vendorid =this.navParams.get('ID');
}

upevent(){
var loading1 = this.loadingCtrl.create({
spinner: 'bubbles',
showBackdrop: false,
cssClass: 'loader'
});
loading1.present()
var postdata = {
user_id: this.navParams.get('ID'),
getit: "user_upcomming",
}
    var serialized_all = this.serializeObj(postdata);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(this.customer.base_url + 'ticket.php', serialized_all, options)
    .map(res => res.json())
    .subscribe((response) => {
    loading1.dismiss();
    console.log(response)
    for(let data of response ){

    this.details.push({
    post_title : data.post_title,
    Eventimage : data.Eventimage,
    EventStartDate : data.EventStartdate,
    Eventvanue : data.Eventvanue,
    ID : data.ID
      });
    }
})
}

pastevent(){
var loading = this.loadingCtrl.create({
spinner: 'bubbles',
showBackdrop: false,
cssClass: 'loader'
});
loading.present()
var postdata1 = {
user_id: this.navParams.get('ID'),
getit: "user_pastevent",
}
    var serialized_all = this.serializeObj(postdata1);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(this.customer.base_url + 'ticket.php', serialized_all, options)
    .map(res => res.json())
    .subscribe((data) => {
    loading.dismiss();
    console.log(data)
    for(let data1 of data ){

    this.arr1.push({
    post_title : data1.post_title,
    Eventimage : data1.Eventimage,
    EventStartDate : data1.EventStartdate,
    Eventvanue : data1.Eventvanue,
  });
}
})
}
public serializeObj(obj) {
var result = [];
for (var property in obj)
result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
return result.join("&");
}

getUser() {
var loading = this.loadingCtrl.create({
spinner: 'bubbles',
showBackdrop: false,
cssClass: 'loader'
});
loading.present()
var postdata = {
user_id: this.navParams.get('ID'),
getit: "get_userdata",
ID : this.navParams.get('ID'),
}
    console.log(postdata)
    var serialized_all = this.serializeObj(postdata);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(this.customer.base_url + 'user.php', serialized_all, options)
    .map(res => res.json())
    .subscribe((response) => {
    console.log(response)
    this.name = response
    console.log(this.name)
    loading.dismissAll();
    })

}

editPage(producerid){
this.navCtrl.push(EditPage,{
user_id : producerid
},{animate:false});
}

edit(vendor) {
this.navCtrl.push(AlleventsPage,{
user_id : vendor
},{animate:false});
} 

upcoming(idd){
this.navCtrl.push(DetailPage,{
event_id : idd
})
}  

settingPage(){
this.navCtrl.push(SettingsPage,{},{animate:false});
}
}
