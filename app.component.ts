import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {CuisinePage} from "../pages/cuisine/cuisine";
import{PricePage} from "../pages/price/price";
import {SmartAudioProvider} from "../providers/smart-audio/smart-audio";


declare var google;



@Component({
  templateUrl: 'app.html',



  })

  export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,public statusBar: StatusBar, public splashScreen: SplashScreen, smartAudio: SmartAudioProvider) {

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      smartAudio.preload('buttonPush', '/assets/audio/Koolaid Man.mp3');

    });

    // set our app's pages
    this.pages = [
      {title: 'Home', component: HomePage},
      {title: 'Neighborhood', component: ListPage},
      //{title: 'Cuisine', component: CuisinePage},
      //{title: 'Price', component: PricePage},
    ];
  }




  openPage(page) {
    // close the menu when clicking a link from the menu

    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }



  }

/*export class MyComponentOrService {

  constructor(private platform: Platform, private geolocation: Geolocation) {

    platform.ready().then(() => {

      // get current position
      geolocation.getCurrentPosition().then(pos => {
        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
      });

      const watch = geolocation.watchPosition().subscribe(pos => {
        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
      });

      // to stop watching
      watch.unsubscribe();

    });
}*/











