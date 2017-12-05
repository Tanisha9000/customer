import { Component } from '@angular/core';
import { IonicPage, NavController, Events, NavParams, ActionSheetController, ToastController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { LoadingController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { CustomerProvider } from '../../providers/customer/customer';
import {FormBuilder,Validators,FormControl } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { PasswordPage } from '../password/password';
import { AlertController } from 'ionic-angular';
@IonicPage()
@Component({
selector: 'page-edit',
templateUrl: 'edit.html',
})
export class EditPage {
userimagee: any;
namee :any;
eventimage="assets/img/event1.jpg";
image_data="";
userimage: any;
srcImage: string;
public id;even=[]
public name
userInfo: {
fname: string,
username: string,
identity:any,
email: string,
gender: string,
description: any,
number: any,
website: any,
facebook: any,
instagram: any,
} = {
fname: '',
username: '',
email: '',
gender: '',
description: '',
identity: '',
number: '',
website: '',
facebook: '',
instagram: '',
};

constructor(public navCtrl: NavController, 
private camera: Camera, 
public events: Events, 
public toastCtrl: ToastController, 
public actionSheetCtrl: ActionSheetController, 
public customer: CustomerProvider, 
public navParams: NavParams, 
public formBuilder: FormBuilder,
public loadingCtrl: LoadingController,
public http: Http,
private alertCtrl: AlertController) 
{
this.getuserdetail()
}

doRefresh(refresher) {
console.log('Begin async operation', refresher);
this.getuserdetail();
setTimeout(() => {
console.log('Async operation has ended');
refresher.complete();
}, 2000);
} 

changeemail(email){
let alert = this.alertCtrl.create({
title: 'Change Email',
inputs: [
{
name: 'email',
placeholder: 'Email',
value:email,
}],
buttons: [
{
text: 'Cancel',
role: 'cancel',
handler: data => {
console.log('Cancel clicked');
}
},
{
text: 'Submit',
handler: data => {
console.log(data.email)
var postdata = {
getit: 'email_verificatin',
user_id: localStorage.getItem('user_id'),
email: data.email,
}
var serialized_all = this.serializeObj(postdata);
let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
let options = new RequestOptions({ headers: headers });
this.http.post(this.customer.base_url + 'user.php', serialized_all, options)
.map(res => res.json())
.subscribe((data) => {
console.log(data)
var toast = this.toastCtrl.create({
    message: data.msg,
    duration: 5000,
    position: 'bottom'
  });
  toast.present();
})

// if (User.isValid(data.username, data.password)) {
//   // logged in!
// } else {
//   // invalid login
//   return false;
// }
}
}
]
});
alert.present();
}

public serializeObj(obj) {
var result = [];
for (var property in obj)
result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
return result.join("&");
}

public getuserdetail() {
this.userInfo.fname = this.navParams.get("name");
localStorage.setItem(this.namee,this.userInfo.fname);
var loading = this.loadingCtrl.create({
spinner: 'bubbles',
showBackdrop: false,
cssClass: 'loader'
});
loading.present();
return new Promise(resolve => {
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
    this.userimagee=response.user_img;
    this.id = response.user_data.data.ID;
    this.userInfo.username = response.user_data.data.user_login;
    this.userInfo.email = response.user_data.data.user_email;

if(response.meta.first_name[0]=="")
{
response.meta.first_name[0]="";
}
if(response.user_data.data.user_url==""){
response.user_data.data.user_url=="";
}

if(response.meta.phone==undefined)    
{

response.meta.phone="";
}
else{
this.userInfo.number = response.meta.phone[0];
}

if(response.meta.gender==undefined)    
{
response.meta.gender= '';
}
else{
this.userInfo.gender = response.meta.gender[0];
}

if(response.meta.identity==undefined)    
{
response.meta.identity= '';
}
else{
this.userInfo.identity = response.meta.identity[0];
}

if(response.meta.description==undefined)    
{
response.meta.description= '';
}
else{
this.userInfo.description = response.meta.description[0];
}

if(response.meta.facebook==undefined)    
{
response.meta.facebook= '';
}
else{
this.userInfo.facebook = response.meta.facebook[0];
}

if(response.meta.instagram==undefined)    
{
response.meta.instagram= '';
}
else{
this.userInfo.instagram = response.meta.instagram[0];
}
this.userInfo.username = response.user_data.data.user_login;
// this.userInfo.email = response.user_data.data.user_email;
this.userInfo.number = response.meta.phone[0];
this.userInfo.description = response.meta.description[0];
this.userInfo.fname = response.meta.first_name[0]+" "+response.meta.last_name[0];
this.userInfo.website = response.user_data.data.user_url;
})
})
}

public updateprofile(data) {
console.log(data.value);
// console.log("babita");
console.log(data.value)
return new Promise(resolve => {
data.value.getit='edit_profile';
data.value.user_id=localStorage.getItem('user_id');
var loading4 = this.loadingCtrl.create({
spinner: 'bubbles',
showBackdrop: false,
cssClass: 'loader'
});
loading4.present()
var postdata = {
user_id: localStorage.getItem('user_id'),
getit: "edit_profile",
phone: data.value.number,
descripiton: data.value.description,
fname: data.value.fname,
gender: data.value.gender,
website: data.value.website,
username: data.value.username,
user_email: data.value.email,
identity:data.value.identity,
facebook:data.value.facebook,
instagram:data.value.instagram
}
var serialized_all = this.serializeObj(postdata);
let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
let options = new RequestOptions({ headers: headers });
this.http.post(this.customer.base_url + 'user.php', serialized_all, options)
.map(res => res.json())
.subscribe((response) => {
loading4.dismiss();
console.log(response)
if(this.image_data != ""){
let loader5 =this.loadingCtrl.create({   
spinner: 'bubbles',
showBackdrop: false,
cssClass: 'loader'
});
loader5.present()  
console.log(this.image_data);
var postdata1={
getit :'save_avatar', 
user_id :localStorage.getItem('user_id'),
img : this.image_data

}
console.log(postdata1)
var serialized_all6 = this.serializeObj(postdata1);
let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
let options = new RequestOptions({ headers : headers });
this.http.post(this.customer.base_url + 'ticket.php', serialized_all6, options)
.map(res=>res.json())
.subscribe((dataa)=>{ 
loader5.dismiss();
console.log(dataa)
})
var toast = this.toastCtrl.create({
message: "Profile updated successfully!",
duration: 5000,
position: 'bottom'
});
toast.present();
this.events.publish('user_updated')
}
this.navCtrl.push(ContactPage,{},{animate: false});
})
})
}

presentActionSheet() {
const actionSheet = this.actionSheetCtrl.create({
buttons: [
{
text: 'Choose Photo',
handler: () => {
this.getPicture(0); // 0 == Library
}
}, {
text: 'Take Photo',
handler: () => {
this.getPicture(1); // 1 == Camera
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
correctOrientation: true
}).then((imageData) => {
this.image_data=imageData;
this.eventimage='data:image/jpeg;base64,' + imageData;
this.postpic(imageData);
}, (err) => {
var toast = this.toastCtrl.create({
message:JSON.stringify(err),
duration: 5000,
position: 'bottom'
});

toast.present();
});
}

postpic(imageData) {
// alert(JSON.stringify(imageData))
let load = this.loadingCtrl.create({
content: 'uploading image...',
spinner: 'bubbles',
showBackdrop: false,
cssClass: 'loader'
});
load.present()
var postdata = {
getit: 'save_avatar',
img: imageData,
user_id: localStorage.getItem('user_id'),
}
    var serialized_all = this.serializeObj(postdata);
    // alert(serialized_all)
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(this.customer.base_url + 'user.php', serialized_all, options)
    .map(res => res.json())
    .subscribe((data) => {
    load.dismiss();
    this.userimagee=data.user_img;
    var split = data.user_img.split('"');
    this.userimage = split[1];
    localStorage.setItem('userimage',this.userimage);
    this.events.publish('userimage', this.userimage);
})
}
confirm() {
this.navCtrl.push(ContactPage,{},{animate: false})
}
passwordPage() {
this.navCtrl.push(PasswordPage,{},{animate: false});
}
ionViewDidLoad() {
console.log('ionViewDidLoad EditPage');
}
}
