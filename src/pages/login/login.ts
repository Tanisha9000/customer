import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,Platform ,Events } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { CustomerProvider} from '../../providers/customer/customer';
import {Http, Headers, RequestOptions} from '@angular/http';
import {LoadingController} from 'ionic-angular';
import { ForgetpwPage } from '../forgetpw/forgetpw';
import { FormBuilder} from '@angular/forms';
import { CreatenewPage } from '../createnew/createnew';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
userimage: any;
bitt : any;
submitted = false;
onSubmit() { this.submitted = true; }
public data={
email: '',
};
public Loader=this.loadingCtrl.create({
content: 'Please wait...',
dismissOnPageChange: true,
});
constructor(public navCtrl: NavController,
public events : Events ,
public navParams: NavParams,
public customer:CustomerProvider, 
public loadingCtrl:LoadingController, 
public http:Http, 
public formBuilder: FormBuilder,
public toastCtrl: ToastController){
}
public serializeObj(obj){
var result = [];
for (var property in obj)
result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
return result.join("&");
}

login(dataa)                 
{
let loader=this.loadingCtrl.create({
spinner: 'bubbles',
showBackdrop: false,
cssClass: 'loader',
});
loader.present();
var postdata1={
username: dataa.value.email,
password: dataa.value.password,
getit: "signin",
    }
    var serialized_all = this.serializeObj(postdata1);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.customer.base_url + 'user.php', serialized_all, options)
    .map(res=>res.json())
    .subscribe((data)=>{
    console.log(data)
    loader.dismiss();
    if (data.data.errors != undefined) {
    for (let i in data.data.errors) {
    console.log(i)
    if(i== "invalid_email"){
    this.navCtrl.push(CreatenewPage,
    {email: dataa.value.email},{animate:false});
    }
    var errmsg=i.split('_');
    var toast = this.toastCtrl.create({
    message: errmsg[0].toUpperCase()+" "+errmsg[1].toUpperCase(),
    duration: 5000,
    position: 'bottom'
    });
    toast.present();
    }
    }  else if(data.roles[0]=="administrator") {
    console.log(data.roles[0]=="administrator")

    } else{
    console.log("user")
    localStorage.setItem('user_id', data.data.ID);
    this.events.publish('usertab', true);
    this.getuserdetail(data.data.ID);
    this.bitt = 3;
    localStorage.setItem('bitt',this.bitt); 
    this.navCtrl.push(TabsPage).then(() => {
    const index = this.navCtrl.getActive().index;
    this.navCtrl.remove(0, index);
    }); 
    }                           
})
}

public getuserdetail(id) {
return new Promise(resolve => {
var postdata = {
user_id: id,
getit: "get_userdata",
}
    var serialized_all = this.serializeObj(postdata);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(this.customer.base_url + 'user.php', serialized_all, options)
    .map(res => res.json())
    .subscribe((response) => {
    var split = response.user_img.split('"');
    this.userimage = split[1].replace("#038;", "");
    // alert(this.userimage);
    localStorage.setItem('userimage',this.userimage);

    this.events.publish('userimage', this.userimage);
    })
})
}

ionViewDidLoad() {
console.log('ionViewDidLoad LoginPage');
}

tabPage(){
this.navCtrl.push(TabsPage,{},{animate: false});
}
registerPage(){
this.navCtrl.push(RegisterPage,{},{animate: false});
}
goto(){
this.navCtrl.push(ForgetpwPage,{},{animate: false});
}

}
