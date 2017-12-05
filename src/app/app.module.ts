import { NgModule, ErrorHandler,ViewChild, ElementRef} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { PasswordPage } from '../pages/password/password';
import { LocationPage } from '../pages/location/location';
import { RegisterPage } from '../pages/register/register';
import { DetailPage } from '../pages/detail/detail';
import { EditPage } from '../pages/edit/edit';
import { Intro } from '../pages/intro/intro';
import { SettingsPage } from '../pages/settings/settings';
import { SelectlocationPage } from '../pages/selectlocation/selectlocation';
import { AddPage } from '../pages/add/add';
import { HttpModule, Headers, RequestOptions } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CustomerProvider } from '../providers/customer/customer';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ForgetpwPage } from '../pages/forgetpw/forgetpw';
import { Geolocation } from '@ionic-native/geolocation';
import { Diagnostic } from '@ionic-native/diagnostic';
import { SocialSharing } from '@ionic-native/social-sharing';
import { PurchasePage } from '../pages/purchase/purchase';
import { GeteventsPage } from '../pages/getevents/getevents';
import { BillingmodalPage } from '../pages/billingmodal/billingmodal';
import { CardmodalPage } from '../pages/cardmodal/cardmodal';
import { Stripe } from '@ionic-native/stripe';
import { SignupPage } from '../pages/signup/signup';
import { CreatenewPage } from '../pages/createnew/createnew';
import { CategoryeventPage } from '../pages/categoryevent/categoryevent';
import { AddticketPage } from '../pages/addticket/addticket';
import { ProducerPage } from '../pages/producer/producer';
import { ScanPage } from '../pages/scan/scan';
import { Calendar } from '@ionic-native/calendar';
import { LongPressModule } from 'ionic-long-press';
import { DatePipe } from '@angular/common';
import { LocPage } from '../pages/loc/loc';
import { Clipboard } from '@ionic-native/clipboard';
import { TooltipsModule } from 'ionic-tooltips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlleventsPage } from '../pages/allevents/allevents';
import { EditpagePage } from '../pages/editpage/editpage';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
// import { MomentModule } from 'angular2-moment';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Intro,
    LoginPage,
    RegisterPage,
    DetailPage,
    EditPage,
    SettingsPage,
    AddPage,
    PasswordPage,
    LocationPage,
    ForgetpwPage,
    SelectlocationPage,
    PurchasePage,
    GeteventsPage,
    BillingmodalPage,
    CardmodalPage,
    SignupPage,
    CreatenewPage,
    CategoryeventPage,
    AddticketPage,
    ProducerPage,
    ScanPage,
    LocPage,
    AlleventsPage,
    EditpagePage,
    
    
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    NgxQRCodeModule,
    LongPressModule,
    TooltipsModule,
    BrowserAnimationsModule,
   
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Intro,
    LoginPage,
    RegisterPage,
    DetailPage,
    EditPage,
    SettingsPage,
    AddPage,
    PasswordPage,
    LocationPage,
    ForgetpwPage,
    SelectlocationPage,
    PurchasePage,
    GeteventsPage,
    BillingmodalPage,
    CardmodalPage,
    CreatenewPage,
    SignupPage,
    CategoryeventPage,
    AddticketPage,
    ProducerPage,
    ScanPage,
    LocPage,
    AlleventsPage,
    EditpagePage
    ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CustomerProvider,
    HttpModule,
    BarcodeScanner,
    Camera,
    Geolocation,
    Diagnostic,
    HttpModule,
    SocialSharing,
    Stripe,
    Calendar,
    DatePipe,
    Clipboard,
    SQLite
   
 
    
  ]
})
export class AppModule {}
