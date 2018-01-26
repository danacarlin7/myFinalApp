import { Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import {HomePage} from "../home/home";
import {SmartAudioProvider} from "../../providers/smart-audio/smart-audio";
import {NativeAudio} from "@ionic-native/native-audio";

/**
 * Generated class for the FinalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-final',
  templateUrl: 'final.html',
})
export class FinalPage {
  price: any;
  location: any;
  cuisine: any;
  restaurants: Array<string>;
  selectedItem: any;
  restaurant: any;


  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, private vibration: Vibration, public smartAudio: SmartAudioProvider) {
    this.selectedItem = navParams.get('item');
    this.restaurants = ["Pepolino Restaurant", "Locanda Verde", "Scalini Fedeli", "Gran Morsi", "Ecco", "Tutto il Giorno", "The Odeon", "Mamo Restaurant", "Petrarca Cucina E Vino", "Osteria Morini","Maialino", "Marta", "Giorgios", "Zio Ristorante", " Manzo Ristorante", "Obica Mozzarella Bar Pizza e Cucina",'Rafele Restaurante', 'Artusi', 'Palma', 'Barbuto', 'Dell Anima', 'Morandi', 'Via Carota', 'I Sodi', 'Lupa', 'Babbo'];

    this.restaurantChoice();
    this.vibrate();
    this.showAlert();
    this.buttonPush();

    // Let's populate this page with some filler content for funzies
  }
s
  restaurantChoice() {
    let restaurant = Math.floor(Math.random() * 30);
    this.restaurant = restaurant;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinalPage');
  }

  vibrate() {
    this.vibration.vibrate(10000);
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: this.restaurants[this.restaurant],
      buttons: ['Enjoy your meal!!']
    });
    alert.present();
  }

  itemTapped(event, item) {
    this.navCtrl.push(HomePage, {
      item: item
    });


  }
  buttonPush(){
    this.smartAudio.play('buttonPush')
  }
}

