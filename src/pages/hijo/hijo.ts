import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cita } from '../../models/item.model';
import { Hijo } from '../../services/Hijo.service';


@IonicPage()
@Component({
  selector: 'page-hijo',
  templateUrl: 'hijo.html',
})
export class HijoPage {
  citas: Cita[];
  cap:any;
  doc:any;

  constructor(private HijoService: Hijo, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HijoPage');
    this.doc = this.HijoService.doc
    this.cap = this.HijoService.cap

    this.HijoService.getCapsHijo().subscribe(citas =>{ 
      this.citas = citas
      console.log(this.citas.length)
    });
  }

}
