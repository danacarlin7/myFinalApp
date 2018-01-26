import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {PricePage} from "../price/price";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  places: Array<{ }>;
  items : Array<{ }>;
  price:any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['restaurant','beer', 'restaurant', 'wine', 'restaurant',
    'wine', 'beer', 'restaurant', 'wine'];
    this.items =[];
    this.places = ['Chelsea', 'East Village', 'Flatiron','Greenwich Village','Hells Kitchen','Soho','Tribeca','UES', 'UWS','West Village'];
    for (let i = 0; i < 10; i++) {
      this.items.push({
        title:this.places[i] ,
       // note: 'This is item #' + i,*/

        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }


  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(PricePage, {
        item: item
      });
    }

  }

