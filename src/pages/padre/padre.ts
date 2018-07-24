import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { Cita } from '../../models/item.model';
import { Padre  } from '../../services/Padre.service';


@IonicPage()
@Component({
  selector: 'page-padre',
  templateUrl: 'padre.html',
})

export class PadrePage {
  citas: Cita[];
  cap:any;
  doc:any;

  constructor(private PadreService: Padre, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PadrePage');
    this.doc = this.PadreService.doc
    this.cap = this.PadreService.cap

    this.PadreService.getCapsPadre().subscribe(citas =>{ 
      this.citas = citas
      console.log(this.citas.length)
    });
  }

}
