import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions } from '@angular/http';
import { FormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CustomerProvider} from '../../providers/customer/customer';

@IonicPage()
@Component({
  selector: 'page-forgetpw',
  templateUrl: 'forgetpw.html',
})
export class ForgetpwPage {
data:any="";
userdata:any='';

constructor(public formBuilder: FormBuilder ,
public navCtrl: NavController,
public navParams: NavParams,
private http: Http,public loadingCtrl: LoadingController,public customer:CustomerProvider, public toastCtrl: ToastController) {
}

ionViewDidLoad() {
console.log('ionViewDidLoad ForgetpwPage');
}
public serializeObj(obj) {
var result = [];
for (var property in obj)
result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
return result.join("&");
}
forgot(data){
console.log(data.value);
var loading = this.loadingCtrl.create({
spinner: 'bubbles',
showBackdrop: false,
cssClass: 'loader'
});
loading.present()
var postdata={
getit: "lostpw",
user_login:data.value.email,
}
    var serialized_all = this.serializeObj(postdata);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(this.customer.base_url + 'user.php', serialized_all, options)
    .map(res=>res.json())
    .subscribe((data)=>{
    console.log(data);
    loading.dismissAll();
    var toast = this.toastCtrl.create({
    message: data.msg,
    duration: 5000,
    position: 'bottom'
    });
    toast.present();
})
}
}

