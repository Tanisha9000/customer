import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController} from 'ionic-angular';
import { Http, RequestOptions, Headers} from '@angular/http';
import { CustomerProvider } from '../../providers/customer/customer';
import { FormBuilder } from '@angular/forms';
import { EditPage } from '../edit/edit';

@IonicPage()
@Component({
selector: 'page-createnew',
templateUrl: 'createnew.html',
})
export class CreatenewPage {
name:any;
submitted = false;
onSubmit() { this.submitted = true; }
public data={
email :''
};

constructor(public navCtrl: NavController, public navParams: NavParams,
public customer:CustomerProvider, 
public loadingCtrl:LoadingController, 
public http:Http, public formBuilder: FormBuilder,
public toastCtrl: ToastController) {
this.mail1();
}

public serializeObj(obj) {
var result = [];
for (var property in obj)
result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
return result.join("&");
}

mail1()
{
this.data.email = this.navParams.get('email');
}

login(data)                 
{
var loading = this.loadingCtrl.create({
spinner: 'bubbles',
showBackdrop: false,
cssClass: 'loader'
});
loading.present()
var postdata1={
username: data.value.username,
last_name: data.value.lastname,
getit: "add_user",
password : data.value.password,
email : data.value.email
  }
    console.log(postdata1)
    this.name = data.value.username+" "+data.value.lastname;
    console.log(this.name)
    var serialized_all = this.serializeObj(postdata1);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.customer.base_url + 'user.php', serialized_all, options)
    .map(res=>res.json())
    .subscribe((data)=>{
    loading.dismiss();
    console.log(data)

    if(parseInt(data.code)==0){
    var toast = this.toastCtrl.create({
    message: data.error.toUpperCase(),
    duration: 5000,
    position: 'bottom'
    });
    toast.present();
    }else if(parseInt(data.code)==1){
    localStorage.setItem('user_id',data.user_id);
    this.navCtrl.push(EditPage,{name:this.name},{animate: false});
}
})
}
ionViewDidLoad() {
console.log('ionViewDidLoad CreatenewPage');
}
}
