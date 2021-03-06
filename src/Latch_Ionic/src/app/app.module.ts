import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Latch } from './app.component';
import { NavController, NavParams } from 'ionic-angular';


import { LandingPage } from '../pages/landing/landing';
import { HomePage } from '../pages/home/home';
import { SignInPage } from '../pages/sign-in/sign-in';
import { RegisterPage } from '../pages/register/register';
import { OtpPage } from '../pages/otp/otp';
import { MobileNumPage } from '../pages/mobile-num/mobile-num';

import { NickPage } from '../pages/nick/nick';
import { InterestsPage } from '../pages/interests/interests';
import { UploadPicPage } from '../pages/upload-pic/upload-pic';
import { IndiChatPage } from '../pages/indi-chat/indi-chat';
import { GroupChatPage } from '../pages/group-chat/group-chat';
import { ChatBotPage } from '../pages/chat-bot/chat-bot';
import { BotMapPage } from '../pages/bot-map/bot-map';
import { ModalPage } from '../pages/modal/modal';
import { SosPage } from '../pages/sos/sos';
import { GroupAddPage } from '../pages/group-add/group-add';
import { Chats } from '../components/chats/chats';
import { Groups } from '../components/groups/groups';
import { Location } from '../components/location/location';

import { HttpService } from '../providers/http-service';
import { GlobalVariables } from '../providers/global-variables';
import { IonicStorageModule } from '@ionic/storage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { File } from '@ionic-native/file';
// import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import { Ng2EmojiModule } from 'ng2-emoji';
// import { Push } from '@ionic-native/push';
// import { ImageResizer, ImageResizerOptions } from '@ionic-native/image-resizer';
// import { Crop } from '@ionic-native/crop';


import { Push } from '@ionic-native/push';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '9b9de210'
  },
  'push': {
    'sender_id': '1082407628646',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#343434'
      }
    }
  }
};

@NgModule({
  declarations: [
    Latch,
    LandingPage,
    HomePage,
    SignInPage,
    RegisterPage,
    MobileNumPage,
    OtpPage,
    NickPage,
    InterestsPage,
    UploadPicPage,
    ChatBotPage,
    IndiChatPage,
    GroupChatPage,
    ModalPage,
    GroupAddPage,
    BotMapPage,
     Chats,
    Groups,
    SosPage,
    Location,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    IonicModule.forRoot(Latch),
    IonicStorageModule.forRoot(),
      Ng2EmojiModule.forRoot(),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Latch,
    LandingPage,
    HomePage,
    SignInPage,
    RegisterPage,
    MobileNumPage,
    BotMapPage,
    ModalPage,
    OtpPage,
    NickPage,
    InterestsPage,
    UploadPicPage,
    ChatBotPage,
    IndiChatPage,
    GroupChatPage,
    GroupAddPage,
     Chats,
    Groups,
    SosPage,
    Location,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FileTransfer,
    FileTransferObject,
    File,
    Geolocation,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpModule,
    HttpService,
    GlobalVariables,
    ImagePicker,
    Push,
  ]
})
export class AppModule {}
