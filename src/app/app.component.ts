import { Component } from '@angular/core';
import { Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Intro } from '../pages/intro/intro';
import { CustomerProvider } from '../providers/customer/customer';
import { ForgetpwPage } from '../pages/forgetpw/forgetpw';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { PurchasePage } from '../pages/purchase/purchase';
import { DetailPage } from '../pages/detail/detail';
import { EditPage } from '../pages/edit/edit';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { AddPage } from '../pages/add/add';
import { SelectlocationPage } from '../pages/selectlocation/selectlocation';
import { AboutPage } from '../pages/about/about';
import { PasswordPage } from '../pages/password/password';
import { LocationPage } from '../pages/location/location';
import { Geolocation } from '@ionic-native/geolocation';
import { GeteventsPage } from '../pages/getevents/getevents';
import { SignupPage } from '../pages/signup/signup';
import { CreatenewPage } from '../pages/createnew/createnew';
import { AddticketPage } from '../pages/addticket/addticket';
import { AlleventsPage } from '../pages/allevents/allevents';
import { EditpagePage } from '../pages/editpage/editpage';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, 
    splashScreen: SplashScreen, public customer:CustomerProvider,private geolocation: Geolocation,public events: Events) {
    platform.ready().then(() => {
      if(localStorage.getItem('userimage')!= null){
        let userimage=localStorage.getItem('userimage');
        this.events.publish('userimage', userimage);
      }
      
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
       platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
// this.rootPage = localStorage.getItem('user_id') != null ? TabsPage : LoginPage;
    });
    });
  }
}
