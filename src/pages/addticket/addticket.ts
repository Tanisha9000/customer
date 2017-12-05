import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events, ToastController,Platform } from 'ionic-angular';
import { AddPage } from '../add/add';
import { CustomerProvider } from '../../providers/customer/customer';
import { Http, RequestOptions,Headers } from '@angular/http';
import * as moment from 'moment';
import { DatePipe } from '@angular/common';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
@IonicPage()
@Component({
selector: 'page-addticket',
templateUrl: 'addticket.html',
})
export class AddticketPage   {
public database: SQLite; databasequery;
public itemss=[];
username='';
public data ={
post_title : '',
post_description :'',
stock :'',
price :'',
startdate :'',
enddate :''
}

constructor(
public navCtrl: NavController,
public navParams: NavParams,
public events: Events,
public customer: CustomerProvider,
public toastCtrl: ToastController,
public http: Http,
public datepipe: DatePipe,
public sqlite: SQLite,
private platform: Platform
){
this.platform.ready().then(() => {
this.database = new SQLite();
this.databasequery = this.database.create({
name: 'data.db',
location: 'default'
})
this.setenddate();
})
}

setenddate(){
let date=new Date();
this.data.startdate=this.datepipe.transform(date, 'y-MM-ddTH:mm');
this.databasequery.then((db:SQLiteObject)=>{
db.executeSql("SELECT * FROM userdata1", {}).then((dataa) => {
console.log(dataa.rows.item)
if(dataa.rows.length > 0){
    for(var i = 0; i < dataa.rows.length; i++) {
    this.data.enddate= dataa.rows.item(i).eventenddate;
}
}
},(error) => {
console.log("ERROR: " + JSON.stringify(error));
});
})
}

public serializeObj(obj){
var result = [];
for (var property in obj)
result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
return result.join("&");
}

saveticket(){
if(this.data.post_title=="" || this.data.post_title==null || this.data.post_title==undefined){
    var toast = this.toastCtrl.create({
    message: "Please fill the title above",
    duration: 3000,
    position: 'bottom'
    });
    toast.present();
}else if(this.data.post_description=="" || this.data.post_description==null || this.data.post_description==undefined){
    var toast = this.toastCtrl.create({
    message: "Please fill the description above",
    duration: 3000,
    position: 'bottom'
    });
    toast.present();
}else if(this.data.stock=="" || this.data.stock==null || this.data.stock==undefined){
    var toast = this.toastCtrl.create({
    message: "Please fill the stock field",
    duration: 3000,
    position: 'middle'
    });
    toast.present();
}else if(this.data.price=="" || this.data.price==null || this.data.price==undefined ){
    var toast = this.toastCtrl.create({
    message: "Please fill the price above",
    duration: 3000,
    position: 'bottom'
    });
    toast.present();
}else if(this.data.startdate=="" || this.data.startdate==null || this.data.startdate==undefined){
    var toast = this.toastCtrl.create({
    message: "Please fill the start date above",
    duration: 3000,
    position: 'bottom'
    });
    toast.present();
} else if(this.data.enddate=="" || this.data.enddate==null || this.data.enddate==undefined){
    var toast = this.toastCtrl.create({
    message: "Please fill the end date above",
    duration: 3000,
    position: 'bottom'
    });
    toast.present();
} 
else if(parseInt(this.data.price) < 0) { 
    var toast = this.toastCtrl.create({
    message: "Please fill the correct price above",
    duration: 4000,
    position: 'bottom'
    });
    toast.present();
}else{
console.log(this.data)
var d = moment(this.data.enddate).diff(this.data.startdate, 'days')
console.log(d)      
if(d<0){
var toast = this.toastCtrl.create({
message: "Please check the Dates specified",
duration: 3000,
position: 'bottom'
});
toast.present();
}             
else{
// this.itemss.push(this.data);
// this.events.publish('tickets', this.itemss);
this.databasequery.then((db:SQLiteObject)=>{
db.executeSql('CREATE TABLE IF NOT EXISTS userdata(id INTEGER PRIMARY KEY AUTOINCREMENT,post_title TEXT,post_description TEXT ,stock INTEGER,price INTEGER,startdate TEXT,enddate TEXT)', {})
.then((create)=>{
console.log(create)
db.executeSql("INSERT INTO userdata (post_title,post_description,stock,price,startdate,enddate) VALUES ('"+this.data.post_title+"', '"+this.data.post_description+"', '"+this.data.stock+"', '"+this.data.price+"', '"+this.data.startdate+"', '"+this.data.enddate+"')", {})
.then((inserted)=>{
db.executeSql("SELECT * FROM userdata", {}).then((dataa) => {
}).catch((error)=>{
console.log("error2");
console.log(error);
var toast = this.toastCtrl.create({
message: "The details of ticket are saved",
duration: 5000,
position: 'bottom'
});
toast.present();
let date=new Date();
var newdate=this.datepipe.transform(date, 'y-MM-ddTH:mm');
this.data ={
post_title : '',
post_description :'',
stock :'',
price :'',
startdate :newdate,
enddate :''
}
})
this.navCtrl.push(AddPage,{},{animate:false});
}).catch((error)=>{
console.log("error1")
console.log(error);
})

})
.catch((error)=>{
console.log("error0");
console.log(error)
});
})
}                  
}
}
previous(){
this.navCtrl.pop();  
}  
ionViewDidLoad() {
console.log('ionViewDidLoad AddticketPage');
}

}
