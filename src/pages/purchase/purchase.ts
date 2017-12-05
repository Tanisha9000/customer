import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,ViewController, ToastController, LoadingController, Platform, AlertController } from 'ionic-angular';
import { CustomerProvider} from '../../providers/customer/customer';
import {Http, Headers, RequestOptions} from '@angular/http';
import { BillingmodalPage } from '../billingmodal/billingmodal';
import { CardmodalPage } from '../cardmodal/cardmodal';
import { ScanPage } from '../scan/scan';
import { SignupPage } from '../signup/signup';

@IonicPage()
@Component({
  selector: 'page-purchase',
  templateUrl: 'purchase.html',
})
export class PurchasePage {
public details=[];
ticketss=[];
event_id: any;
quant: any;
remaning: number;
sale: any;
postid :any;
qtysel : number;
x : number =0;
val :number;
netamount : number=0;
coupon : number=0;
cardss: any;
number: any;
price=0;
pricee =0;
submitted = false;
pri: any;
qty:any;
cartproduct=[];
cartproduct1=[];
onSubmit() {
this.submitted = true;
}

public data:any={
select:[],
};

public data1:any = {
card : '',
promo:''
}

constructor(public navCtrl: NavController,
public navParams: NavParams,
public customer:CustomerProvider,
public http:Http,
public modalCtrl: ModalController,
public toastCtrl: ToastController,
public loadingCtrl: LoadingController,
private alertCtrl: AlertController
)
{
this.usrdetail()
this.tickets()
}

doRefresh(refresher) {
console.log('Begin async operation', refresher);
this.usrdetail();
this.tickets(); 
setTimeout(() => {
console.log('Async operation has ended');
refresher.complete();
}, 2000);
}
//  presentProfileModal()
//  {
//     let myModal = this.modalCtrl.create(BillingmodalPage);
//     myModal.present();
//  }
signout(){
this.navCtrl.setRoot(SignupPage);
this.navCtrl.push(SignupPage,{},{animate:false})
}

presentCardModal(){
let Modal =this.modalCtrl.create(CardmodalPage);
Modal.present();
Modal.onDidDismiss((data) => { 
var posval={
getit: "getcards",
user_id: localStorage.getItem('user_id'),
}
    var serialized_all = this.serializeObj(posval);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });   
    this.http.post(this.customer.base_url + 'ticket.php', serialized_all, options)
    .map(res=>res.json())
    .subscribe((dataa)=>{ 
    console.log(dataa)
    this.cardss=dataa;
})
})
}
public serializeObj(obj) {
var result = [];
for (var property in obj)
result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
return result.join("&");
}

apply_promo(promo){
if(this.data1.promo == ""){
let alert = this.alertCtrl.create({
title: 'Promo Code',
subTitle: 'Enter your promo code first',
buttons: ['OK']
});
alert.present();
}else{
let load = this.loadingCtrl.create({
spinner: 'hide',
content: 'Checking...'
});
load.present();
var postpromo={
getit: "apply_coupon",
user_id :localStorage.getItem('user_id'),
product_id: this.cartproduct,
promo: promo,
}
    console.log(postpromo)
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(this.customer.base_url + 'coupon_validation.php', postpromo, options)
    .map(res=>res.json())
    .subscribe((response)=>{
    load.dismiss();
    console.log(response);
    if(response.code == 1){
    var toast = this.toastCtrl.create({
    message: response.msg,
    duration: 3000,
    position: 'bottom'
    });
    toast.present();
    this.coupon = response.coupon_amount;
    // this.netamount = response.cart_amount;
    this.price = parseInt(response.cart_amount);
    }else{
    var toast = this.toastCtrl.create({
    message: response.msg,
    duration: 3000,
    position: 'bottom'
    });
    toast.present();
    this.coupon = 0;
    // this.netamount = this.price;
    }
})
}
}   

usrdetail(){
this.details=[];
var postdata1={
event_id: this.navParams.get('event_id'),
getit: "event_detail",
}
    var serialized_all = this.serializeObj(postdata1);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(this.customer.base_url + 'user.php', serialized_all, options)
    .map(res=>res.json())
    .subscribe((dataa)=>{ 
    console.log(dataa)
    for(let data3 of dataa.data){
    this.details.push({
    "Eventimage" : data3.Eventimage,
    "post_title":data3.post_title,
    "viewcount": data3.viewcount,
    "Eventvanue":data3.Eventvanue,
    "EventEndDate":data3.EventEndDate,
    "EventStartDate":data3.EventStartDate,
    "vanueaddress":data3.vanueaddress,
    });
    }
    console.log(this.details)
})
}

public tickets()
{
this.ticketss=[];
var loading = this.loadingCtrl.create({
spinner: 'bubbles',
showBackdrop: false,
cssClass: 'loader'
});
loading.present()
var postdata1={
post_id: this.navParams.get('event_id'),
getit: "tickets_details",
user_id: localStorage.getItem('user_id'),
}
    console.log(postdata1)         
    var serialized_all = this.serializeObj(postdata1);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(this.customer.base_url + 'user.php', serialized_all, options)
    .map(res=>res.json())
    .subscribe((dataa)=>{
    loading.dismiss();
    console.log(dataa)
    this.cardss=dataa.usercard
    console.log(this.cardss);
    if(dataa.usercard.length >0){
    this.x =1;
    }
    if(dataa.rsvp.length>0){
    for(let j=0; j<dataa.rsvp.length; j++){
    let quantity:any;
    if(dataa.rsvp[j].ticketmeta._stock==undefined){
    quantity=0;
    let ticketdata={
    post_id: dataa.rsvp[j].post_id,
    meta_id: dataa.rsvp[j].meta_id,
    price: dataa.rsvp[j].ticketmeta._price[0],
    ticket_name: dataa.rsvp[j].ticketdata.post_title,
    detail: dataa.rsvp[j].ticketdata.post_excerpt,
    //  quantity: dataa.rsvp[j].ticketmeta._stock[0],
    ticket_tyoe: 'rsvpticket',
    total_sales :dataa.rsvp[j].ticketmeta.total_sales[0],
    //  remaning: parseInt(dataa.rsvp[j].ticketmeta._stock[0])-parseInt(dataa.rsvp[j].ticketmeta.total_sales[0])
    }

    this.ticketss.push(ticketdata);
    this.data.select[dataa.rsvp[j].post_id]="0";
    this.pri = dataa.rsvp[j].ticketmeta._price[0];
    }else{
    let ticketdata={
    post_id: dataa.rsvp[j].post_id,
    meta_id: dataa.rsvp[j].meta_id,
    price: dataa.rsvp[j].ticketmeta._price[0],
    ticket_name: dataa.rsvp[j].ticketdata.post_title,
    detail: dataa.rsvp[j].ticketdata.post_excerpt,
    quantity: dataa.rsvp[j].ticketmeta._stock[0],
    ticket_tyoe: 'rsvpticket',
    total_sales :dataa.rsvp[j].ticketmeta.total_sales[0],
    remaning: parseInt(dataa.rsvp[j].ticketmeta._stock[0])-parseInt(dataa.rsvp[j].ticketmeta.total_sales[0])
    }
    this.ticketss.push(ticketdata);
    this.data.select[dataa.rsvp[j].post_id]="0";
    this.pri = dataa.rsvp[j].ticketmeta._price[0];

    }
    }
    }

    if(dataa.woocommerece.length>0){
    for(let k=0; k<dataa.woocommerece.length; k++){
    let quantity:any;
    if(dataa.woocommerece[k].ticketmeta._stock==undefined){
    quantity=0;
    let ticketdata={
    post_id: dataa.woocommerece[k].post_id,
    meta_id: dataa.woocommerece[k].meta_id,
    price: dataa.woocommerece[k].ticketmeta._price[0],
    ticket_name: dataa.woocommerece[k].ticketdata.post_title,
    detail: dataa.woocommerece[k].ticketdata.post_excerpt,
    // quantity:  quantity,
    ticket_tyoe: 'wooticket',
    total_sales :dataa.woocommerece[k].ticketmeta.total_sales[0],
    // remaning: parseInt(dataa.woocommerece[k].ticketmeta._stock[0])-parseInt(dataa.woocommerece[k].ticketmeta.total_sales[0])
    }
    this.ticketss.push(ticketdata);
    this.data.select[dataa.woocommerece[k].post_id]="0";
    }else{
    let ticketdata={
    post_id: dataa.woocommerece[k].post_id,
    meta_id: dataa.woocommerece[k].meta_id,
    price: dataa.woocommerece[k].ticketmeta._price[0],
    ticket_name: dataa.woocommerece[k].ticketdata.post_title,
    detail: dataa.woocommerece[k].ticketdata.post_excerpt,
    quantity: dataa.woocommerece[k].ticketmeta._stock[0],
    ticket_tyoe: 'wooticket',
    total_sales :dataa.woocommerece[k].ticketmeta.total_sales[0],
    remaning: parseInt(dataa.woocommerece[k].ticketmeta._stock[0])-parseInt(dataa.woocommerece[k].ticketmeta.total_sales[0])
    }
    this.ticketss.push(ticketdata);
    this.data.select[dataa.woocommerece[k].post_id]="0";
    }
    }
    this.pricee = dataa.woocommerece[0].ticketmeta._price[0];
    // this.quant =  dataa.woocommerece[0].ticketmeta._stock[0];
    // this.postid = dataa.woocommerece[0].post_id;
    // alert(this.data.select[dataa.woocommerece[0].post_id].value)
    // this.qtysel = parseInt(this.data.select[dataa.woocommerece[0].post_id])* parseInt(dataa.woocommerece[0].ticketmeta._stock[0]);
    console.log(this.data);
    }

    })
}

pricecal(qty,pri, qtyr,name, type){
    if(this.cartproduct.length>0){
    for(let i=0; i< this.cartproduct.length; i++){
    if(this.cartproduct1.indexOf(qty)!=-1){
    if(this.cartproduct[i].post_id==qty && parseInt(qtyr)!=0){
    this.cartproduct[this.cartproduct1.indexOf(qty)].quantity=qtyr;
    }else if(this.cartproduct[i].post_id==qty && parseInt(qtyr) ==0){
    this.cartproduct.splice(i, 1)
    this.cartproduct1.splice(this.cartproduct1.indexOf(qty), 1)
    }
    }else{
    this.cartproduct.push({ticket_name: name,  post_id:qty, price:pri,quantity:qtyr, ticket_type: type})
    this.cartproduct1.push(qty)
    }
    }
    }else{
    this.cartproduct.push({ticket_name: name,  post_id:qty, price:pri,quantity:qtyr, ticket_type: type})
    this.cartproduct1.push(qty)
    }
    this.price=0;
    if(this.cartproduct.length>0){
    console.log(this.cartproduct)  
    console.log(this.cartproduct1)
    for(let i in this.cartproduct){
    this.price = this.price+(parseInt(this.cartproduct[i].quantity)*parseInt(this.cartproduct[i].price)); // this.price+(qtyr* pri);
    }
    }
}
//  pay(formdata)
//  {
//    console.log(formdata.value);

//    //if(formdata.quantity_post_id.length>0){
//    console.log(this.cartproduct)
//    console.log(this.data1.card)
//    for(let i=0; i<this.ticketss.length;i++ ){
//    for(let j=0;j< this.cartproduct.length;j++){
//    if(this.ticketss[i].post_id== this.cartproduct[j].post_id){
//       if(this.ticketss[i].ticket_tyoe=='rsvpticket')  {
//        let daata= "quantity_"+this.cartproduct[j].post_id;
//        console.log(daata)
//        var post1={
//         ticket_type :this.ticketss[i].ticket_tyoe,
//         getit: "purchase_ticket",
//         email: localStorage.getItem('email'),
//         full_name: localStorage.getItem('name'),
//         order_status:'' ,
//         product_id: this.cartproduct[j].post_id,
//         daata: this.cartproduct[j].quantity
//        }
//          console.log(post1)
//    var serialized_all1 = this.serializeObj(post1);
//    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
//    let options = new RequestOptions({ headers: headers });
//    this.http.post(this.customer.base_url + 'user.php', serialized_all1, options)
//     .map(res=>res.json())
//     .subscribe((dataa)=>{
//                      console.log(dataa)
//     })
//     }
//     else{
//      var post2={
//       getit: "wooticket",
//       user_id :localStorage.getItem('user_id'),
//       product_id: this.cartproduct[j].post_id,
//       quantity: this.cartproduct[j].quantity,
//       card_id: this.data1.card,
//       promo :this.data1.promo
//            }
//        console.log(post2)
//  var serialized_all2 = this.serializeObj(post2);
//  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
//  let options = new RequestOptions({ headers: headers });
//  this.http.post(this.customer.base_url + 'user.php', serialized_all2, options)
//   .map(res=>res.json())
//   .subscribe((dataa)=>{
//                    console.log(dataa)
//   })
//     }
//     }
//    } 
//   }
//   // var toast = this.toastCtrl.create({
//   //   message: "Success! ticket purchased successfully",
//   //   duration: 3000,
//   //   position: 'Top'
//   // });
//   // toast.present();
//  }
deletecard(customerid, cardid){
var loading1 = this.loadingCtrl.create({
spinner: 'bubbles',
showBackdrop: false,
cssClass: 'loader'
});
loading1.present()
var postsss={
stripe_user_id : customerid ,
card_id : cardid,
getit: "delete_card",
user_id: localStorage.getItem('user_id'),
}
    console.log(postsss)         
    var serialized_all = this.serializeObj(postsss);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(this.customer.base_url + 'ticket.php', serialized_all, options)
    .map(res=>res.json())
    .subscribe((dataaaa)=>{
    loading1.dismiss();   
    console.log(dataaaa)  
    if(dataaaa.status.deleted == true){
    this.cardss=dataaaa.usercard 
    var toast = this.toastCtrl.create({
    message: "Card has been successfully deleted",
    duration: 3000,
    position: 'Bottom'
    });
    toast.present();  
}
})   
}
pay_new(formdata){
console.log(this.data1.card)
console.log(this.cartproduct.length);
if(this.cartproduct.length==0){
var toast = this.toastCtrl.create({
message: "Select a ticket",
duration: 3000,
position: 'bottom'
});
toast.present();  
}
else if(this.data1.card==""){
var toast = this.toastCtrl.create({
message: "Select A Card For Payment",
duration: 3000,
position: 'bottom'
});
toast.present();
}else{
var loader = this.loadingCtrl.create({
spinner: 'bubbles',
showBackdrop: false,
cssClass: 'loader'
});
loader.present()
console.log(this.cardss)
console.log(formdata.value)
console.log("nitin");
console.log(this.ticketss)
console.log("netin");
console.log(this.cartproduct)
var post2={
getit: "wooticket",
user_id :localStorage.getItem('user_id'),
product_id: this.cartproduct,
promo: this.data1.promo,
card_id: this.data1.card,
}
    this.event_id = this.navParams.get('event_id')
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(this.customer.base_url + 'purchase.php', post2, options)
    .map(res=>res.json())
    .subscribe((response)=>{
    loader.dismiss();
    console.log(response);

    this.navCtrl.push(ScanPage,{ID: this.event_id}, {animate: false});
    this.price = 0;
    this.cartproduct =[];
    this.coupon =0;
    this.data ={
    select :[]
    }
    this.data1 ={
    promo :'',
    card :''
    }
})
}
}

ionViewDidLoad() {
console.log('ionViewDidLoad PurchasePage');
}
}
