import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MapsPage } from '../maps/maps';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'page-contate-nos',
  templateUrl: 'contate-nos.html'
})
export class ContateNosPage {
  registerForm: FormGroup;
  pushPage: any;
  params: Object;
  text;
  constructor(public navCtrl: NavController,
              public formbuilder: FormBuilder,
              public db: AngularFireDatabase,
              public toastController: ToastController) {
    //this.registerForm = this.formbuilder.group({
     // name   :[null, [Validators.required, Validators.minLength(5)]],
      //email  :[null, [Validators.required, Validators.email]],
     // text   :[null, [Validators.required, Validators.minLength(10)]],
    //}
            
    this.pushPage = MapsPage;
    this.params = { id: 42 };
  }

       
  addMsg(text: String){
    this.db.database.ref('/mensagem').push({
      text: text
      })
    .then(() => {
      this.toastController.create({
        message:'Mensagem enviada com sucesso',
        duration:3000
      }).present();
      this.navCtrl.setRoot(MapsPage);
    }) 
  }
  
}
