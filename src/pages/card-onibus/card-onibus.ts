import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { InformaEsPage } from '../informa-es/informa-es';
@IonicPage()
@Component({
  selector: 'page-card-onibus',
  templateUrl: 'card-onibus.html'
})
export class CardOnibusPage {

  onibusDB;

  constructor(public navCtrl: NavController,
              public http: Http,
              public navParams: NavParams,       
              ) {
    this.onibusDB=[];
  }
  
  ionViewDidLoad(){
    this.pegarDadosFirebase();
  }

  pegarDadosFirebase(){
    this.http.get('https://aplicativo-onibus.firebaseio.com/onibus.json')
    .map(res => res.json())
    .subscribe(data => {
      if(data !== null && data != undefined){
      this.trataDados(data);
    }
    })
  }

  trataDados(dados){
    this.onibusDB = Object.keys(dados).map(i => {
      dados[i]._id = i;
      return dados[i];
    });
    console.log(this.onibusDB)
  }

  trazID(dados){
    this.onibusDB = Object.keys(dados).map(i => {
      dados[i]._id = i;
      return i;});
  }
  
  itemclicked(item):void{
    this.navCtrl.push(InformaEsPage,item);
    console.log(item);
  }
  /*getList(){
    let listDB = this.db.database.ref('/onibus');
    listDB.on ('value',(snapshot) =>{
      const item = snapshot.val();
      console.log(item);
    })
  }*/
}
