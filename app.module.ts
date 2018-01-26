import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {CuisinePage} from "../pages/cuisine/cuisine";
import {FinalPage} from "../pages/final/final";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {PricePage} from "../pages/price/price";
import {Geolocation, Coordinates,GeolocationOptions,Geoposition,PositionError} from '@ionic-native/geolocation';
import {Cuisine2Page} from "../pages/cuisine2/cuisine2";
import {Vibration} from "@ionic-native/vibration";
import { SmartAudioProvider } from '../providers/smart-audio/smart-audio';
import {NativeAudio} from "@ionic-native/native-audio";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CuisinePage,
    PricePage,
    FinalPage,
    Cuisine2Page

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CuisinePage,
    PricePage,
    FinalPage,
    Cuisine2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Vibration,
    SmartAudioProvider,
    NativeAudio,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

  ]
})
export class AppModule {}
