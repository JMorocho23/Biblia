import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { Cita } from './../models/item.model'


@Injectable()
export class EspirituSanto {

    citasCollection: AngularFirestoreCollection<Cita>;
    clientDoc: AngularFirestoreDocument<Cita>;
    citas: Observable<Cita[]>;
    cita: Observable<Cita>;

    rnd: any;
    pos: any;
    doc: any;
    cap: any;

    es = ['Hechos', '1SanJuan', '2SanJuan', '3SanJuan', 'SanJudas', '1Tesalonisenses', '2Tesalonisenses', '1Timoteo', '2Timoteo', 'Apocalipsis', 'Colosenses', 'Efesios', 'Filemon', 'Filepenses', 'Galatas', 'Hebreos', 'Romanos', 'Santiago', 'Tito','1Pedro','2Pedro','1Corintios','2Corintios'];
    esAbr = ['Hch', '1 Jn', '2 Jn', '3 Jn', 'Judas', '1 Ts', '2 Ts', '1 Tm', '2 Tm', 'Ap', 'Col', 'Ef', 'Flm', 'Flp', 'Ga', 'Hb', 'Rm', 'St', 'Tt','1 P','2 P','1 Co','2 Co'];
    esLength = [1002, 105, 13, 15, 25, 89, 47, 113, 83, 405, 95, 155, 25, 104, 149, 303, 431, 108, 46, 105, 61, 437, 256];

    constructor(private afs: AngularFirestore) {
    }


    getCitaES(): Observable<Cita> {
        console.log("***Espiritu Santo***");
        this.pos = this.rndPHES(this.es);
        var evg = this.es[this.pos];
        this.doc = evg;
        var size = this.esLength[this.pos];
        console.log("Se cita de:" + evg);
        console.log("Tam de: " + size);

        var id = this.rndCita(size);
        console.log("id de cita: " + id);

        this.clientDoc = this.afs.doc<Cita>(`${evg}/${id}`);

        this.cita = this.clientDoc.snapshotChanges().pipe(map(action => {
            if (action.payload.exists === false) {
                return null;
            } else {
                const data = action.payload.data() as Cita;
                data.id = action.payload.id;
                return data;
            }
        }));
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

    getAbrES(): string {
        var res_evg;

        res_evg = this.esAbr[this.pos];

        return res_evg;
    }


    setCapsES(cap: number) {
        console.log("Evg: " + this.doc);
        console.log("Cap: " + cap);
        this.cap = cap;
    }

    getCapsES(): Observable<Cita[]> {
        console.log("Evg-ES: " + this.doc);
        console.log("Cap-ES: " + this.cap);

        this.citasCollection = this.afs.collection(`${this.doc}`,
            ref => ref.where('Capitulo', '==', this.cap).orderBy('Versiculo'));

        this.citas = this.citasCollection.snapshotChanges().pipe(map(changes => {
            return changes.map(action => {
                const data = action.payload.doc.data() as Cita;
                data.id = action.payload.doc.id;
                return data;
            });
        }));
        return this.citas;
    }



}