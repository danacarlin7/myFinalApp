import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



/**
 * Generated class for the CuisinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import {PricePage} from "../price/price";
import {ListPage} from "../list/list";
import {FinalPage} from "../final/final";

@IonicPage()
@Component({
  selector: 'page-cuisine',
  templateUrl: 'cuisine.html',
})


export class CuisinePage {
  selectedItem: any;
  icons: string[];
  places: Array<{}>;
  items: Array<{}>;
  price: any;
  location: any;
  cuisine: any;
  restaurants: Array<{}>;

  ionViewDidLoad() {
    console.log('ionViewDidLoad CuisinePage');
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.icons = ['restaurant', 'wine', 'beer', 'wine', 'restaurant', 'beer',
      'beer', 'restaurant', 'wine', 'restaurant'];
    this.items = [];
    this.places = ['Italian', 'French', 'Japanese', 'Chinese', 'American', 'Indian', 'Thai', 'Greek'];
    for (let i = 0; i < 8; i++) {
      this.items.push({
        title: this.places[i],
        // note: 'This is item #' + i,*/

        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
    this.selectedItem = navParams.get('restaurant');

    // Let's populate this page with some filler content for funzies
    this.restaurants = ["Rafele Restaurante", "LArtusi", "Palma", "Barbuto", "dell'anima", "Morandi", "Via Carota", "I Sodi","Lupa", "Babbo"];
    for (let i = 0; i < 4; i++) {
      this.restaurants.push({

        // note: 'This is item #' + i,*/

        icon: this.restaurants[Math.floor(Math.random() * this.restaurants.length)]
      });
    }
  }


  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(FinalPage, {
      item: item
    });


  }
}


