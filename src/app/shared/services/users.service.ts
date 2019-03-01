import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Registro } from '../models/users';
import { map } from 'rxjs/operators';
// para que otros modulos sean inyectados en este servicio
@Injectable()
export class UserService {
    API_ENDPOINT = 'https://weightfit-52010.firebaseio.com/users.json';
    API_ENDPOINT_2 = 'https://weightfit-52010.firebaseio.com/users/';

    constructor(private afDB: AngularFireDatabase, private http: HttpClient) { }

    public newRegister(user: Registro) {
        const body = JSON.stringify(user);
        const headers = new HttpHeaders({ 'Content_Type': "application/json" });
        return this.http.post(this.API_ENDPOINT, body, { headers }).pipe(map(res => {
            return res;
        }));
    }
    public getRegister(key$: string) {
        console.log(`${this.API_ENDPOINT_2} /${key$}.json`);
        return this.http.get<Registro>( `${ this.API_ENDPOINT_2 }${ key$ }.json` );
    }
}
