
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Http } from '@angular/http';
/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseServiceProvider {

  onibusDB;
  constructor(public http: Http,public db: AngularFireDatabase) {
    this.onibusDB=[];
  }

}
