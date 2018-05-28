import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';
import { Item } from '../../models/item.model';
import { BibliaListService } from '../../services/biblia-list.service';
import { Observable } from 'rxjs/Observable';
import { DataSnapshot } from '@firebase/database';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // cita2: Item = {
  //   capitulo: '',
  //   versiculo: '',
  //   versiculo_text: ''
  // };

 

  Mateo = [];
  Elegido = [];
  Marcos = [];
  Lucas = [];
  Juan = [];
  Rnd = [];
  Rn1: number = 0;
  Rn2: number = 0;
  Nvers: number = 0;
  Evangelio: string = "";
  Capitulo: string = "";
  Versiculo: string = "";
  NVersiculo: string = "";
  Cita: string = "";


  constructor(private biblia: BibliaListService, private angFire : AngularFireDatabase, public navCtrl: NavController, platform: Platform) {
    
 

  }

  ngOnInit(){
    this.refDB();
  }

  refDB() {

    this.Rn1= Math.floor((Math.random() * 4) + 1);
    this.Rn1= 2;

    if(this.Rn1==1)
    {
      firebase.database().ref('Mateo').on('value', snapshot => {
        this.Mateo = snapshot.val();
        this.Elegido=this.Mateo;
        this.Evangelio="Mt";
        // this.RandomEvangelios(this.Elegido);
        this.Rn1= Math.floor((Math.random() * 1071) + 1);
        this.Rnd[0]= this.Mateo[this.Rn1-1]
      });
    }
    if(this.Rn1==2)
    {
      firebase.database().ref('Marcos').on('value', snapshot => {
        this.Marcos = snapshot.val();
        this.Elegido=this.Marcos;
        this.Evangelio="Mc";
        this.RandomEvangelios(this.Evangelio, this.Marcos);
        console.log("*****Cita****1**"+this.Evangelio);
        // this.RandomEvangelios(this.Elegido);



      });
      console.log("*****Cita****13232**"+this.Evangelio);
    }
    if(this.Rn1==3)
    {  
    firebase.database().ref('Lucas').on('value', snapshot => {
      this.Lucas = snapshot.val();
      this.Elegido=this.Lucas;
      this.Evangelio="Lc";
      // this.RandomEvangelios(this.Elegido);
      this.Rn1= Math.floor((Math.random() * 1151) + 1);
      this.Rnd[0]= this.Lucas[this.Rn1-1]
    });
    }
    if(this.Rn1==4)
    {
      firebase.database().ref('Juan').on('value', snapshot => {
        this.Juan = snapshot.val();
        this.Elegido=this.Juan;
        this.Evangelio="Jn";
        // this.RandomEvangelios(this.Elegido);
        this.Rn1= Math.floor((Math.random() * 879) + 1);
        this.Rnd[0]= this.Juan[this.Rn1-1]

      });
  
    }


      
  }

  RandomEvangelios(Evangelio, Elegido)
  {
    console.log("*****Evangelios****"+this.Evangelio); 
    this.Rn2= Math.floor((Math.random() * 678) + 1);
      
    this.Versiculo = this.Marcos[this.Rn2-1].versiculo_text
    this.NVersiculo = this.Marcos[this.Rn2-1].versiculo
    this.Capitulo = this.Marcos[this.Rn2-1].capitulo
    this.Cita = this.Versiculo + " ("+ this.Evangelio+ " "+this.Capitulo+", "+this.NVersiculo+")";
    console.log("*****CitaRandomEvangelios****"+this.Cita);   
    this.Rnd[0] = this.Cita; 
    
   }



   
}
