import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
selector: 'page-signup',
templateUrl: 'signup.html',
})
export class SignupPage {

constructor(public navCtrl: NavController, public navParams: NavParams) {
}

log(){
this.navCtrl.push(LoginPage);
}
aboutPage(){
this.navCtrl.push(AboutPage);
}

ionViewDidLoad() {
console.log('ionViewDidLoad SignupPage');
}
}
