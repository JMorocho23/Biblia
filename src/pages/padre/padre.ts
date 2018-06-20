import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { Cita } from '../../models/item.model';
import { Hijo } from '../../services/Hijo.service';


@IonicPage()
@Component({
  selector: 'page-padre',
  templateUrl: 'padre.html',
})

export class PadrePage {
  citas: Cita[];

  constructor(private HijoService: Hijo, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PadrePage');
   /* this.bibliaService.getCitas().subscribe(citas =>{ 
      this.citas = citas
      console.log(this.citas.length)
    });*/
  }

}
