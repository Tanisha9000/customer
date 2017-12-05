import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,ToastController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { PurchasePage } from '../purchase/purchase';
import { Http, Headers, RequestOptions } from '@angular/http';
import { CustomerProvider } from '../../providers/customer/customer';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
@IonicPage()
@Component({
  selector: 'page-billingmodal',
  templateUrl: 'billingmodal.html',
})
export class BillingmodalPage {
  countries: any;
  details: any;
  billingData :any[];
  private todo : FormGroup;
  public obkeys=Object.keys;
  public data={
    billing_first_name:'',
    billing_last_name :'',
    billing_address_1 : '',
    billing_address_2 :'',
    billing_city :'',
    billing_email :'',
    billing_postcode :'',
    billing_phone :'',
    billing_country :''
  }
   
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController,
    public customer: CustomerProvider,
    public http: Http,
    private toastCtrl: ToastController,
    private formBuilder: FormBuilder)
     {
      this.billForm();
     }
     public serializeObj(obj) {
      var result = [];
      for (var property in obj)
        result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
      return result.join("&");
    }

  billForm() 
  {
    var postdata1={
      user_id : localStorage.getItem('user_id'),
      getit : 'billing_address',
 
        }
                         console.log(postdata1)
                         var serialized_all = this.serializeObj(postdata1);
                         let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
                         let options = new RequestOptions({ headers : headers });
                         this.http.post(this.customer.base_url + 'ticket.php', serialized_all, options)
                         .map(res=>res.json())
                         .subscribe((dataa)=>{ 
                          this.countries=dataa.countries;
                          console.log(dataa)
                          this.data.billing_first_name=dataa.billing_details.billing_first_name;
                          this.data.billing_last_name=dataa.billing_details.billing_last_name;
                          this.data.billing_address_1=dataa.billing_details.billing_address_1;
                          this.data.billing_address_2=dataa.billing_details.billing_address_2;
                          this.data.billing_city=dataa.billing_details.billing_city;
                          this.data.billing_postcode=dataa.billing_details.billing_postcode;
                          this.data.billing_phone=dataa.billing_details.billing_phone; 
                          this.data.billing_email=dataa.billing_details.billing_email; 
                          this.data.billing_country=dataa.billing_details.billing_country; 
                          
                         })
     console.log(this.data)
     console.log(this.billingData)
  
}

updatedata(billdata) {
 console.log(billdata.value)
 billdata.value.user_id=localStorage.getItem('user_id');
 billdata.value.getit='update_billing';
 console.log(billdata.value);
 var serialized_all = this.serializeObj(billdata.value);
 let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
 let options = new RequestOptions({ headers : headers });
 this.http.post(this.customer.base_url + 'ticket.php', serialized_all, options)
 .map(res=>res.json())
 .subscribe((dataa)=>{

  console.log(dataa)
  var toast = this.toastCtrl.create({
    message: dataa.msg,
    duration: 3000,
    position: 'middle',
  });
  toast.present();
 })

}

  closeModal() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BillingmodalPage');
  }

}
