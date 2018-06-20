import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cita } from '../../models/item.model';
import { EspirituSanto  } from '../../services/EspirituSanto.service';

@IonicPage()
@Component({
  selector: 'page-esp-santo',
  templateUrl: 'esp-santo.html',
})
export class EspSantoPage {

  citas: Cita[];
  cap:any;
  doc:any;

  constructor(private esService: EspirituSanto, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EspSantoPage');
    this.doc = this.esService.doc
    this.cap = this.esService.cap

    this.esService.getCapsES().subscribe(citas =>{ 
      this.citas = citas
      console.log(this.citas.length)
    });
  }

}
