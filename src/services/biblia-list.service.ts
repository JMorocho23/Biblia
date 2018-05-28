import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Item } from './../models/item.model'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BibliaListService{

     items: Observable<Item[]>;
    private bibliaListref = this.db.list<Item>('biblia-list');

    constructor(private db: AngularFireDatabase){

    }

    getBibliaList(){
        return this.bibliaListref;
    }
    
}