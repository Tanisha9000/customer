import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Nav, App, Events} from 'ionic-angular';
import { SignupPage } from '../signup/signup';

@IonicPage()
@Component({
selector: 'page-settings',
templateUrl: 'settings.html',
})
export class SettingsPage {

constructor(public navCtrl: NavController, 
public nav : Nav, 
public events : Events, 
public navParams: NavParams,
public app: App) {
}
logout(){
localStorage.clear();
this.events.publish('usertab', false );
this.nav.setRoot(SignupPage);
this.nav.popToRoot();
// this.app.getRootNav().setRoot(SignupPage);
this.events.publish('logout');
}

ionViewDidLoad() {
console.log('ionViewDidLoad SettingsPage');
}
}
