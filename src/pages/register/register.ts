import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';
import { CustomerProvider} from '../../providers/customer/customer';
import {Http, Headers, RequestOptions} from '@angular/http';
import { AlertController } from 'ionic-angular';
import {LoadingController} from 'ionic-angular';

import { FormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  submitted = false;
			onSubmit() { this.submitted = true; }
			public data='';
		  public Loader=this.loadingCtrl.create({
	    content: 'Please wait...',
	  	dismissOnPageChange: true,
      });

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController,
		public customer:CustomerProvider, 
		public loadingCtrl:LoadingController, 
    public toastCtrl: ToastController,
		public http:Http, public formBuilder: FormBuilder) {
  }
  public serializeObj(obj) {
                    var result = [];
                    for (var property in obj)
                    result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
                    return result.join("&");
                  }
                  register(data){
  if(data.value.password==undefined || data.value.cpassword==undefined || data.value.email==undefined  || data.value.fname==undefined){
    alert("All fields required")
  }else{
    var loading = this.loadingCtrl.create({
      spinner: 'bubbles',
     showBackdrop: false,
     cssClass: 'loader'
  });
   console.log(data.value)
    if(data.value.password != data.value.cpassword){
     let alert1 = this.alertCtrl.create({
       title: 'Error ',
       subTitle: 'Passwords must match.',
       buttons:['Try Again']
     });
     alert1.present();
     }else{   console.log(data);
                       loading.present()
                        var postdata={
                           getit: "add_user",
                                     username:data.value.fname,
                                     
                                     email:data.value.email,
                                     password:data.value.password
                                    }
                                      var serialized_all = this.serializeObj(postdata);
                                       let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
                         let options = new RequestOptions({ headers: headers });
                         this.http.post(this.customer.base_url + 'user.php', serialized_all, options)
                         .map(res=>res.json())
                         .subscribe((response)=>{
                         console.log(response);
                            loading.dismissAll();
                           
                         if(response.code==1){
                         
                               localStorage.setItem('user_id', response.user_id); 
                        this.navCtrl.push(TabsPage).then(() => {
            const index = this.navCtrl.getActive().index;
            this.navCtrl.remove(0, index);
          }); 
                           }else if(response.error=="Sorry, that email address is already used!"){
                         console.log(response.error);
                           
                        var toast = this.toastCtrl.create({
              message: response.error,
              duration: 5000,
              position: 'bottom'
            });
            toast.present();
                         }
                         else{
                             var toast = this.toastCtrl.create({
              message: response.error,
              duration: 5000,
              position: 'bottom'
            });
            toast.present();
     
                         }
 
 
                         })
 
     }
  }
}
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

// tabPage(){
     
//     this.navCtrl.push(TabsPage);
//   }

loginPage(){
    this.navCtrl.push(LoginPage);
  }

}
