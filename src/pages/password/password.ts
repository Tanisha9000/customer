import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams,LoadingController,ToastController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions } from '@angular/http';
import { FormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LoginPage } from '../login/login';
import { CustomerProvider} from '../../providers/customer/customer';

/**
 * Generated class for the PasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-password',
  templateUrl: 'password.html',
})
export class PasswordPage {
  data:any="";
  userdata:any='';

  constructor(public formBuilder: FormBuilder ,
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http,public loadingCtrl: LoadingController,
        public toastCtrl: ToastController,public customer:CustomerProvider, ) {
      // this.userdata=JSON.parse(localStorage.getItem("user_data"));   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordPage');
  }




  public serializeObj(obj) {
    var result = [];
    for (var property in obj)
    result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
    return result.join("&");
    }
Change(data){
  console.log(data.value);
var loading = this.loadingCtrl.create({
          spinner: 'bubbles',
          showBackdrop: false,
          cssClass: 'loader'
      });
  if(data.value.new!=data.value.cnew){
               var toast = this.toastCtrl.create({
              message: " New password and confirm new password doesnot match!",
              duration: 5000,
              position: 'bottom'
            });
            toast.present();
  
  }else{
       loading.present()
         var postdata={
         user_id: localStorage.getItem('user_id'),
         getit: "change_password",
         user_login: localStorage.getItem('user_login'),
         new_pass:data.value.new,
         old_pass:data.value.old,
                  
                   }

                   var serialized_all = this.serializeObj(postdata);
                   let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
     let options = new RequestOptions({ headers: headers });
     this.http.post(this.customer.base_url + 'user.php', serialized_all, options)
    
     
     .map(res=>res.json())
     .subscribe((data)=>{
        console.log(data);
        //alert("babita");
       //alert(data.posts.msg);
          loading.dismissAll();
          if(data.code==1){
          var toast = this.toastCtrl.create({
              message: data.msg,
              duration: 5000,
              position: 'bottom'
            });
            toast.present();
          }
          else{
 var toast = this.toastCtrl.create({
              message: "You have entered wrong old password!",
              duration: 5000,
              position: 'bottom'
            });
            toast.present();
          }
                     
        // if(response.posts.isSucess==true){
        //    localStorage.clear();
        //    this.navCtrl.push(LoginPage);
        //     }else{
        //           }
          })
 }
}
}
