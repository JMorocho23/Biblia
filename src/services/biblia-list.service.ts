import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection, 
AngularFirestoreDocument } from "angularfire2/firestore";
import { Observable } from 'rxjs/Observable';
import { Cita } from './../models/item.model'


@Injectable()
export class BibliaListService{

    citasCollection: AngularFirestoreCollection<Cita>;
    clientDoc: AngularFirestoreDocument<Cita>;
    citas: Observable<Cita[]>;
    cita: Observable<Cita>;

    rnd:any;
    pos:any;
    pos2:any;
    doc:any;
    doc2:any;

    cap:any;

    hijo = ['Juan','Mateo','Lucas','Marcos'];
    hijoAbr = ['Jn','Mt','Lc','Mc'];
    hijoLength = [879,1071,1151,678];

    es = ['Hechos','1SanJuan','2SanJuan','3SanJuan','SanJudas','1Tesalonisenses', '2Tesalonisenses', '1Timoteo', '2Timoteo','Apocalipsis','Colosenses','Efesios','Filemon','Filepenses','Galatas','Hebreos','Romanos','Santiago','Tito'];
    esAbr = ['Hch','1 Jn','2 Jn','3 Jn','Judas','1 Ts','2 Ts','1 Tm', '2 Tm', 'Ap','Col','Ef','Flm','Flp','Ga','Hb','Rm','St','Tt'];
    esLength = [1002,105,13,15,25,89,47,113,83,405,95,155,25,104,149,303,431,108,46];

    constructor(private afs: AngularFirestore){
        
       // this.citasCollection = this.afs.collection('Juan');  
        
    }

    /* Filtro para Capitulo (num)
    this.citasCollection = this.afs.collection('Juan', 
    ref => ref.where('capitulo','==', num).orderBy('versiculo'));
    

    getCitas(doc:string): Observable<Cita[]>{
        console.log('En getCitas es:' + doc);
        this.citasCollection = this.afs.collection(`${doc}`);  

        this.citas = this.citasCollection.snapshotChanges().map(changes =>{
            return changes.map(action => {
                const data =action.payload.doc.data() as Cita;
 
                data.id = action.payload.doc.id;
                return data;
            });
        });

        return this.citas;
    
    }

    getCita(id: string): Observable<Cita> {
        this.clientDoc = this.afs.doc<Cita>(`Juan/${id}`);
        this.cita = this.clientDoc.snapshotChanges().map(action => {
          if(action.payload.exists === false){
            return null; 
          } else {
            const data = action.payload.data() as Cita;
            data.id = action.payload.id;
            return data;
          }
        });
        return this.cita;

    }*/

    getCitaHijo(): Observable<Cita>{
        console.log("***HIJO***");
        this.pos = this.rndPHES(this.hijo);
        var evg = this.hijo[this.pos];
        this.doc = evg;
        var size = this.hijoLength[this.pos];
        console.log("Se cita de:" + evg);
        console.log("Tam de: " + size);

        var id = this.rndCita(size);
        console.log("id de cita: " + id);
   
      this.clientDoc = this.afs.doc<Cita>(`${evg}/${id}`);
        this.cita = this.clientDoc.snapshotChanges().map(action => {
          if(action.payload.exists === false){
            return null; 
          } else {
            const data = action.payload.data() as Cita;
            data.id = action.payload.id;
            return data;
          }
        });
        return this.cita;

    }

    getCitaES(): Observable<Cita>{
        console.log("***Espiritu Santo***");
        this.pos2 = this.rndPHES(this.es);
        var evg = this.es[this.pos2];
        this.doc2 = evg;
        var size = this.esLength[this.pos2];  
        console.log("Se cita de:" + evg);
        console.log("Tam de: " + size);

        var id = this.rndCita(size);
        console.log("id de cita: " + id);

        this.clientDoc = this.afs.doc<Cita>(`${evg}/${id}`);
        this.cita = this.clientDoc.snapshotChanges().map(action => {
          if(action.payload.exists === false){
            return null; 
          } else {
            const data = action.payload.data() as Cita;
            data.id = action.payload.id;
            return data;
          }
        });
        return this.cita;
                
    }

    rndPHES(a: string[]): number {
        var res;
        res = Math.floor((Math.random() * a.length));
        return res;
    }

    rndCita(res: number): number {
        res = Math.floor((Math.random() * res));
        return res;
    }

    getAbrH():string{
        var res_evg;

        res_evg = this.hijoAbr[this.pos];

         return res_evg;
    }

    getAbrES():string{
        var res_evg;

        res_evg = this.esAbr[this.pos2];

         return res_evg;
    }


    setCapsHijo(cap:number){
        console.log("Evg: "+ this.doc);
        console.log("Cap: "+ cap);
        this.cap = cap;     
    }

    getCapsHijo(): Observable<Cita[]>{
        console.log("Evg-Hijo: "+ this.doc);
        console.log("Cap-Hijo: "+ this.cap);

        this.citasCollection = this.afs.collection(`${this.doc}`, 
        ref => ref.where('Capitulo','==', this.cap).orderBy('Versiculo'));

        this.citas = this.citasCollection.snapshotChanges().map(changes =>{
            return changes.map(action => {
                const data =action.payload.doc.data() as Cita;
                data.id = action.payload.doc.id;
                return data;
            });
        });
        return this.citas;

    }



}