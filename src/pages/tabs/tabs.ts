import { Component, ViewChild } from '@angular/core';
import { Events, NavController,Nav } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { AddPage } from '../add/add';
import { SignupPage } from '../signup/signup';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { Tabs } from 'ionic-angular/components/tabs/tabs';

@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {
  in:number;
  @ViewChild('myTabs') tabRef: Tabs;
  variable:boolean;
  userimage: string;
  public id;
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root:any = '';
  tab4Root:any = ContactPage;
  
constructor(public events : Events,
  public navCtrl: NavController,
  public nav : Nav,
  public navParams: NavParams)
{
this.id=localStorage.getItem('user_id');
this.events.subscribe('usertab',(vari)=>{
this.variable=vari;
})

if(localStorage.getItem('userimage')){
this.events.subscribe('userimage', (image) => {
this.userimage = localStorage.getItem('userimage');
})
}
this.events.subscribe('userimage', (image) => {
console.log( localStorage.getItem('userimage'));
this.userimage = localStorage.getItem('userimage');
console.log(this.userimage)
let array = document.getElementsByClassName('tabbar');
let tabbar = array[0];
let element = tabbar.childNodes[tabbar.childElementCount - 1];
if (element) {
element.removeChild(element.childNodes[1]);
let img = document.createElement("img");
img.setAttribute("class", "tab-icon-custom tab-button-icon icon icon-md buszs");
   // make the image dynamic
img.setAttribute("src", this.userimage);
element.insertBefore(img, element.childNodes[1]);
 }
})
this.events.subscribe('logout', ()=>{
this.updateAccountTab();
localStorage.removeItem('userimage')
})
}
ionViewDidEnter() {
// alert(this.navParams.get('bitt'))
if((JSON.parse(localStorage.getItem('bitt')) == 3) && (localStorage.getItem('user_id') != null)){
this.tabRef.select(3);
}
}

updateAccountTab() : void {
let array = document.getElementsByClassName('tabbar');
let tabbar = array[0];
let element = tabbar.childNodes[tabbar.childElementCount-1];
if(element) {
element.removeChild(element.childNodes[1]);
let img = document.createElement("img");
img.setAttribute("class", "tab-icon-custom tab-button-icon icon icon-md");
// make the image dynamic
img.setAttribute("src", '../assets/img/user.png');
element.insertBefore(img, element.childNodes[1]);
}
}

hide(event) {
console.log(event.index)
if (event.index == 2) {
if(localStorage.getItem('user_id') == null){
this.navCtrl.setRoot(SignupPage);
this.navCtrl.push(SignupPage,{},{animate:false});

} else {
this.navCtrl.push(AddPage,{},{animate:false});
}
}
else if(event.index == 3){
if(localStorage.getItem('user_id') == null){
this.navCtrl.setRoot(SignupPage);
this.navCtrl.push(SignupPage,{},{animate:false});
} else {
this.tab4Root = ContactPage;
} 
}
}
}
