import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Http } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';

declare var google: any;

@Component({
  selector: 'page-informa-es',
  templateUrl: 'informa-es.html'
})
export class InformaEsPage {
  onibusInfo;
  public get geolocation(): Geolocation {
    return this._geolocation;
  }
  public set geolocation(value: Geolocation) {
    this._geolocation = value;
  }
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  markers:any;

  constructor(public navCtrl: NavController, 
              public http: Http,
              public navParams: NavParams,
              private _geolocation: Geolocation, 
              private platform: Platform
  ) {
    this.onibusInfo = this.navParams.data;
  }
  ionViewDidLoad(){
    console.log(this.navParams.get(this.onibusInfo));
   //this.pegarDadosFirebase();
  }
/*
  pegarDadosFirebase(){
    this.http.get('https://aplicativo-onibus.firebaseio.com/onibus.json')
    .map(res => res.json())
    .subscribe(data => {
      this.trataDados(data);
    })
  }

  trataDados(dados){
   // this.onibusDB = Object.keys(dados).map(i => dados[i]);
    //console.log(this.onibusDB)
  }*/

  ionViewWillEnter(){
    this.platform.ready().then(() => {
      this.initPage();
    });
  }

  initPage() {
    this.newMethod().then(result => {
      this.loadMap(result.coords.latitude, result.coords.longitude);
    });
  }

  private newMethod() {
    return this.geolocation.getCurrentPosition();
  }
  private loadMap(lat, lng) {
      let latLng = new google.maps.LatLng(lat, lng);

      let mapOptions = {
        center: latLng,
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
      };

      let element = document.getElementById('map');

      this.map = new google.maps.Map(element, mapOptions);
      
      let marker = new google.maps.Marker({
        position: latLng,
        title: 'Minha Localização',
        icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
      })
      let content = `
      <div id="myid"  class="item item-thumbnail-left item-text-wrap">
        <ion-item>
          <ion-row>
            <h6>`+marker.title+`</h6>
          </ion-row>
        </ion-item>
      </div>
      `
      ;
      this.addInfoWindow(marker, content);
      marker.setMap(this.map);
      
      this.loadPoints();
    }

    loadPoints() {
      this.markers = [];

      for (const key of Object.keys(this.onibusInfo)) {
        console.log(this.onibusInfo.descricao )
        let latLng = new google.maps.LatLng(this.onibusInfo.Lat, this.onibusInfo.Lng);
        let marker = new google.maps.Marker({
          position: latLng,
          title: this.onibusInfo.descricao
        })
        let content = `
        <div id="myid"  class="item item-thumbnail-left item-text-wrap">
          <ion-item>
            <ion-row>
              <h6>`+this.onibusInfo.descricao+`</h6>
            </ion-row>
          </ion-item>
        </div>
        `
        ;
        this.addInfoWindow(marker, content);
        marker.setMap(this.map);
      }
      return this.markers;
    }

    addInfoWindow(marker, content) {
      let infoWindow = new google.maps.InfoWindow({
        content: content
      });

      google.maps.event.addListener(marker, 'click', () => {
        infoWindow.open(this.map, marker);

        google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
          document.getElementById('myid').addEventListener('click', () => {
            this.goToEmpresa(marker)
          });
        });
      })
    }

    goToEmpresa(empresa) {
      alert('Click');
    }
}
