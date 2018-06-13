import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Cita } from '../../models/item.model';
import { BibliaListService } from '../../services/biblia-list.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 /*  Variables Viejas
  Mateo = [];
  Elegido = [];
  Marcos = [];
  Lucas = [];
  Juan = [];
  Rnd = ['Hi im empty'];
  Rn2: number = 0;
  Nvers: number = 0;
  Evangelio: string = "";
  Capitulo: number = 0;
  Versiculo: number = 0;
  Cita: string = "";*/
  
  Rn1: number = 0;
  NVersiculo: string = "Empty";


  citas: Cita[];
  cita: Cita= {
    capitulo: 0,
    versiculo: 0,
    versiculo_text: ''
  };

  constructor(private bibliaService: BibliaListService, public navCtrl: NavController, platform: Platform) {
   
  }

  ngOnInit(){
    this.showCita();
  }

  showCita(){

    this.Rn1 = this.rndCita(this.Rn1);
    this.NVersiculo = this.Rn1.toString();

    this.bibliaService.getCita(this.NVersiculo).subscribe(citas =>{ 
      this.cita = citas
      console.log("Var " + this.cita.versiculo_text);
     // this.Capitulo = this.citas.capitulo;
     // this.Versiculo = this.cita.versiculo;
    });
    
    //this.bibliaService.getCita(this.NVersiculo).subscribe(cita => this.Capitulo = cita.capitulo);
    console.log("Rn1 : " + this.Rn1);
  }


  rndCita(res: number): number{

    res= Math.floor((Math.random() * 879) + 1);
    console.log("Result: " + res);
    return res;

  }

}