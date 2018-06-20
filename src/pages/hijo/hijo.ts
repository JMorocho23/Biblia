import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cita } from '../../models/item.model';
import { BibliaListService } from '../../services/biblia-list.service';


@IonicPage()
@Component({
  selector: 'page-hijo',
  templateUrl: 'hijo.html',
})
export class HijoPage {
  citas: Cita[];
  cap:any;
  doc:any;

  constructor(private bibliaService: BibliaListService, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HijoPage');
    this.doc = this.bibliaService.doc
    this.cap = this.bibliaService.cap

    this.bibliaService.getCapsHijo().subscribe(citas =>{ 
      this.citas = citas
      console.log(this.citas.length)
    });
  }

}
