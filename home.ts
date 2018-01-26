import {Component,ViewChild, ElementRef} from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {Geolocation, Coordinates,GeolocationOptions,Geoposition,PositionError} from '@ionic-native/geolocation';
declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
options: GeolocationOptions;
currentPos: Geoposition;
@ViewChild('map') mapElement: ElementRef;
map: any;


  constructor(public alertCtrl: AlertController, private geolocation: Geolocation) {

    this.showAlert();
      this.getUserPosition();

  }
  addMap(lat,long){

    let latLng = new google.maps.LatLng(lat, long);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.addMarker();

  }
  addMarker(){

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let content = "<p>This is your current position !</p>";
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }
  getUserPosition(){
    this.options = {
      enableHighAccuracy : false
    };

    this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {

      this.currentPos = pos;
      console.log(pos);
      this.addMap(pos.coords.latitude,pos.coords.longitude)

    },(err : PositionError)=>{
      console.log("error : " + err.message);
    });
  }
  ionViewDidEnter(){
    this.getUserPosition();
  }


  showAlert() {
    let alert = this.alertCtrl.create({
      title: "WELCOME! You're just a couple clicks away from having your night planned for you!",
      //subTitle: 'Just a couple clicks away from having your night planned for you!',
      buttons: ['OK']});
    alert.present();
  }


}
