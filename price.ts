import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {CuisinePage} from "../cuisine/cuisine";
import {Cuisine2Page} from "../cuisine2/cuisine2";
import {FinalPage} from "../final/final";

/**
 * Generated class for the PricePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-price',
  templateUrl: 'price.html',
})


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class PricePage {
  selectedItem: any;
  icons: string[];
  places: Array<{}>;
  items: Array<{}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['restaurant', 'wine', 'beer', 'restaurant', 'wine', 'restaurant',
      'wine', 'beer', 'wine', 'restaurant'];
    this.items = [];
    this.places = ['$','$$','$$$','$$$$'];
    for (let i = 0; i < 4; i++) {
      this.items.push({
        title: this.places[i],
        // note: 'This is item #' + i,*/

        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });

    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PricePage');
  }



  itemTapped(event, item) {

      this.navCtrl.push(CuisinePage, {
        item: item

        //item:item

      })
    }
  }

