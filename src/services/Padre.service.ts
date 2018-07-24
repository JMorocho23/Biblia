import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection, 
AngularFirestoreDocument } from "angularfire2/firestore";
import { Observable } from 'rxjs/Observable';
import { Cita } from './../models/item.model'


@Injectable()
export class Padre{

    citasCollection: AngularFirestoreCollection<Cita>;
    clientDoc: AngularFirestoreDocument<Cita>;
    citas: Observable<Cita[]>;
    cita: Observable<Cita>;

    rnd: any;
    pos: any;
    doc: any;
    cap: any;

    padre = ['Génesis', 'Éxodo', 'Levítico', 'Números', 'Deuteronomio','Josué', 'Jueces', 'Rut', '1Samuel', 
            '2Samuel','1Reyes', '2Reyes', '1Crónicas', '2Crónicas', 'Esdras', 'Nehemías', 'Tobías', 'Judit', 
            'Ester', '1Macabeos', '2Macabeos', 'Salmos', 'Cantar', 'Lamentaciones', 'Job', 'Proverbios',
            'Eclesiastes', 'Sabiduría', 'Eclesiastico', 'Isaías', 'Jeremías','Baruc', 'Ezequiel', 'Daniel', 
            'Oseas', 'Joel', 'Amós', 'Abdías', 'Jonás', 'Miqueas', 'Nahúm', 'Habacuc', 'Sofonías', 
            'Ageo', 'Zacarías', 'Malaquías'];

    padreAbr = ['Gn', 'Ex', 'Lv', 'Nm', 'Dt', 'Jos', 'Jc', 'Rt', '1S', '2S','1R', '2R', '1Cro', '2Cro', 
            'Esd', 'Ne', 'Tb', 'Jdt', 'Est', '1M', '2M', 'Sal', 'Ct', 'Lm', 'Jb', 'Pr','Qo', 'Sb', 'Si', 
            'Is', 'Jr','Ba', 'Ez', 'Dn', 'Os', 'Jl', 'Am', 'Ab', 'Jon', 'Mi', 'Na','Ha', 'So', 'Ag', 'Za', 
            'Ml'];

    padreLength = [1510, 1214, 858, 1289, 958, 658, 618, 85, 811, 696, 815, 718, 942, 822, 280, 405, 248,
             340, 177, 924, 555, 2508, 116, 153, 1068, 914, 221,  435, 1380, 1290, 1350, 212, 1271, 
             462, 196, 72, 145, 20, 47, 104, 46, 55, 52, 38, 200, 54];



    constructor(private afs: AngularFirestore) {

    }

    getCitaPadre(): Observable<Cita> {
        console.log("***Padre***");
        this.pos = this.rndPHES(this.padre);
        var evg = this.padre[this.pos];
        this.doc = evg;
        var size = this.padreLength[this.pos];
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

    getAbrPadre(): string {
        var res_evg;

        res_evg = this.padreAbr[this.pos];

        return res_evg;
    }

    setCapsPadre(cap: number) {
        console.log("Evg: " + this.doc);
        console.log("Cap: " + cap);
        this.cap = cap;
    }

    getCapsPadre(): Observable<Cita[]> {
        console.log("Evg-Padre: " + this.doc);
        console.log("Cap-Padre: " + this.cap);

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