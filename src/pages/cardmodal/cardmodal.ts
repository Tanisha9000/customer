import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Stripe } from '@ionic-native/stripe';
import { PurchasePage } from '../purchase/purchase';
import { ViewController, ToastController } from 'ionic-angular';
import { CustomerProvider } from '../../providers/customer/customer';
import { Http, RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
selector: 'page-cardmodal',
templateUrl: 'cardmodal.html',
})
export class CardmodalPage {
success: number=0;
public card;
expMonth : any;
expYear ; any;
cards ={
number : '',
cvc : '',
expYearr :0,
name :'',
address_line1 :'',
address_city : '',
address_state: '',
postal_code :''
}
monthes=[];
constructor(public navCtrl: NavController, 
public navParams: NavParams,
public stripe: Stripe,
public viewCtrl: ViewController,
public toastCtrl: ToastController,
public http: Http,
public customer: CustomerProvider,
public loadingCtrl: LoadingController,) {
this.monthe();
}
monthe(){
for(let i=1; i<=12; i++){
if(i<10){
this.monthes.push("0"+i);
}else{
this.monthes.push(JSON.stringify(i));
}
}
}
public serializeObj(obj) {
var result = [];
for (var property in obj)
result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
return result.join("&");
}

updatedata(carddata) {
return new Promise(resolve=>{
var loading = this.loadingCtrl.create({
spinner: 'bubbles',
showBackdrop: false,
cssClass: 'loader'
});
loading.present()
console.log(carddata.value)
var split = carddata.value.expYearr.split("-");
this.expYear = split[0];
this.expMonth = split[1];
this.card = {
number: this.cards.number,
expMonth : this.expMonth,
expYear: this.expYear,
cvc: this.cards.cvc,
name :this.cards.name,
address_line1 : this.cards.address_line1,
address_city : this.cards.address_city,
address_state: this.cards.address_state,
postal_code :this.cards.postal_code
};
this.stripe.setPublishableKey('pk_test_Ldj5kbIUV3FXI5cfoYZw9qfY');
if(this.success == 1){
this.card.cvc="";
return false;
} else {
this.stripe.validateCardNumber(this.card.number).then((success)=>{
this.stripe.validateCVC(this.card.cvc).then((success1)=>{
this.stripe.validateExpiryDate(this.card.expMonth, this.card.expYear).then((success2)=>{
this.stripe.createCardToken(this.card).then((token=>{
this.card.cvc="";
var postdata={
user_id : localStorage.getItem('user_id'),
getit : 'save_card',
token : token.id
}
    console.log('token : ',token.id)
    var serialized_all = this.serializeObj(postdata);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers : headers });
    this.http.post(this.customer.base_url + 'ticket.php', serialized_all, options).map(res=>res.json())
    .subscribe((dataa)=>{ 
    loading.dismiss();
    this.success = 1;
    console.log('ticked purchased')
    console.log(dataa)
    var toast = this.toastCtrl.create({
          message: "The details of card are saved",
          duration: 3000,
          position: 'bottom'
      });
    toast.present();
    this.card={
            number:'',
            expMonth :'',
            expYear:'',
            cvc: '' ,
            name :'',
            address_line1 :'',
            address_city : '',
            address_state: '',
            postal_code :''
      };
this.viewCtrl.dismiss();
})
})).catch((error3=>{
loading.dismiss();
var toast = this.toastCtrl.create({
    message: JSON.stringify(error3),
    duration: 4000,
    position: 'bottom'
    });
toast.present();
}))
}).catch((error2=>{
loading.dismiss();
var toast = this.toastCtrl.create({
    message: JSON.stringify(error2),
    duration: 4000,
    position: 'bottom'
    });
toast.present();
}))

}).catch((error1)=>{
loading.dismiss();
var toast = this.toastCtrl.create({
    message: JSON.stringify(error1),
    duration: 4000,
    position: 'bottom'
    });
toast.present();
})

}).catch((err_response)=>{
loading.dismiss();
this.card.cvc="";
var toast = this.toastCtrl.create({
    message: JSON.stringify(err_response),
    duration: 4000,
    position: 'bottom'
});
toast.present();
});
}
resolve(true);
})
}

ionViewDidLoad() {
console.log('ionViewDidLoad CardmodalPage');
}
}
