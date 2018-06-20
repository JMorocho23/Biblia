import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection, 
AngularFirestoreDocument } from "angularfire2/firestore";
import { Observable } from 'rxjs/Observable';
import { Cita } from './../models/item.model'


@Injectable()
export class Hijo {

    citasCollection: AngularFirestoreCollection<Cita>;
    clientDoc: AngularFirestoreDocument<Cita>;
    citas: Observable<Cita[]>;
    cita: Observable<Cita>;

    rnd: any;
    pos: any;
    doc: any;
    cap: any;

    hijo = ['Juan', 'Mateo', 'Lucas', 'Marcos'];
    hijoAbr = ['Jn', 'Mt', 'Lc', 'Mc'];
    hijoLength = [879, 1071, 1151, 678];

    constructor(private afs: AngularFirestore) {

    }

    getCitaHijo(): Observable<Cita> {
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
            if (action.payload.exists === false) {
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

    getAbrH(): string {
        var res_evg;

        res_evg = this.hijoAbr[this.pos];

        return res_evg;
    }

    setCapsHijo(cap: number) {
        console.log("Evg: " + this.doc);
        console.log("Cap: " + cap);
        this.cap = cap;
    }

    getCapsHijo(): Observable<Cita[]> {
        console.log("Evg-Hijo: " + this.doc);
        console.log("Cap-Hijo: " + this.cap);

        this.citasCollection = this.afs.collection(`${this.doc}`,
            ref => ref.where('Capitulo', '==', this.cap).orderBy('Versiculo'));

        this.citas = this.citasCollection.snapshotChanges().map(changes => {
            return changes.map(action => {
                const data = action.payload.doc.data() as Cita;
                data.id = action.payload.doc.id;
                return data;
            });
        });
        return this.citas;

    }



}