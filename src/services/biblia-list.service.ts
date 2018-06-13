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

    constructor(private afs: AngularFirestore){
        
        this.citasCollection = this.afs.collection('Juan');
    }

    getCitas(): Observable<Cita[]>{

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

    }
 
  


    
}