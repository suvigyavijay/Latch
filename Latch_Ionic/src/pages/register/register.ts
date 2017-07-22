import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InterestsPage } from '../interests/interests';
import { GlobalVariables } from '../../providers/global-variables';
import { HttpService } from '../../providers/http-service';
import { Storage } from '@ionic/storage';
import { UploadPicPage } from '../upload-pic/upload-pic'

/**
 * Generated class for the Register page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {};
  constructor(public navCtrl: NavController, public navParams: NavParams,private httpService: HttpService,private storage:Storage,private globalVars: GlobalVariables) {
  	this.user['name'] = 'Partho Sarthi';
  	this.user['contact'] = 'test167@gmail.com';
  	this.user['password'] = 'techiegeek';
  	this.user['confirm_password'] = 'techiegeek';

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register');
  }

  signUp(){
    console.log(this.globalVars.baseUrl+'/main/accounts/register/');
    // this.httpService.postData(this.globalVars.baseUrl+'/main/accounts/register/',this.user)
    // .then(response=>{
    //    this.storage.set('indi_chat',{});
    //    this.storage.set('group_chat',{});
    //    this.storage.set('chat_bot',{});
    //    this.storage.set('session_key', response.session_key);
    //    this.storage.set('loggedIn', true);
    //    this.storage.set('name', this.user['name']);
    //    this.storage.set('contact', this.user['contact']);
    //   	this.navCtrl.push(InterestsPage);
    // });
    this.navCtrl.push(UploadPicPage);
    console.log(this.user);
  }

}
