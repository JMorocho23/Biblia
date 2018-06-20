import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { HijoPage } from '../hijo/hijo';
import { EspSantoPage } from '../esp-santo/esp-santo'
import { Cita } from '../../models/item.model';
import { Hijo } from '../../services/Hijo.service';
import { EspirituSanto } from '../../services/EspirituSanto.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  EvangelioH: string = "";
  EvangelioES: string = "";


  CapituloH: number = 0;
  CapituloES: number = 0;

  
  Versiculo: string = "";
  NVersiculo: number = 0;
  CitaPadre: string = "";
  CitaHijo: string = "";
  CitaES: string = "";

  citaPadre: Cita = {
    Capitulo: 0,
    Versiculo: 0,
    Versiculo_text: ''
  };

  citaHijo: Cita = {
    Capitulo: 0,
    Versiculo: 0,
    Versiculo_text: ''
  };

  citaES: Cita = {
    Capitulo: 0,
    Versiculo: 0,
    Versiculo_text: ''
  };

  constructor(private esService: EspirituSanto, private HijoService: Hijo, public navCtrl: NavController, platform: Platform) {

  }

  ngOnInit() {
    this.showCitaHijo();
    this.showCitaES();
  }
  /*
    showCitaPadre() {
      this.bibliaService.getCitaHijo().subscribe(citas => {
  
        this.citaPadre = citas
        console.log("Var-Padre: " + this.citaHijo.Versiculo_text);
        this.Capitulo = this.citaPadre.Capitulo;
        this.Versiculo = this.citaPadre.Versiculo_text;
        this.NVersiculo = this.citaPadre.Versiculo;
        this.Evangelio = this.bibliaService.getAbrH();
        this.CitaPadre = this.Versiculo + " (" + this.Evangelio + " " + this.Capitulo + ", " + this.NVersiculo + ")";
      });
    }*/


  showCitaHijo() {
    this.HijoService.getCitaHijo().subscribe(citas => {

      this.citaHijo = citas
      console.log("Var-Hijo: " + this.citaHijo.Versiculo_text);
      this.CapituloH = this.citaHijo.Capitulo;
      this.Versiculo = this.citaHijo.Versiculo_text;
      this.NVersiculo = this.citaHijo.Versiculo;
      this.EvangelioH = this.HijoService.getAbrH();
      this.CitaHijo = this.Versiculo + " (" + this.EvangelioH + " " + this.CapituloH + ", " + this.NVersiculo + ")";

      this.HijoService.setCapsHijo(this.CapituloH);

    });
  }

  showCitaES() {
    this.esService.getCitaES().subscribe(citas => {

      this.citaES = citas
      console.log("Var-ES: " + this.citaES.Versiculo_text);
      this.CapituloES = this.citaES.Capitulo;
      this.Versiculo = this.citaES.Versiculo_text;
      this.NVersiculo = this.citaES.Versiculo;
      this.EvangelioES = this.esService.getAbrES();
      this.CitaES = this.Versiculo + " (" + this.EvangelioES + " " + this.CapituloES + ", " + this.NVersiculo + ")";

      this.esService.setCapsES(this.CapituloES);
    });
  }


  clickHijo() {
    this.navCtrl.push(HijoPage);
  }

  clickES() {
    this.navCtrl.push(EspSantoPage);
  }



}