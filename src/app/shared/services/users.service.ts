import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Registro } from '../models/users';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class UserService {
    API_ENDPOINT = 'https://weightfit-52010.firebaseio.com/users.json';
    API_ENDPOINT_2 = 'https://weightfit-52010.firebaseio.com/users/';

    constructor(
        private http: HttpClient) { }

    public newRegister(user: Registro) {
        const body = JSON.stringify(user);
        const headers = new HttpHeaders({ 'Content_Type': "application/json" });
        return this.http.post(this.API_ENDPOINT, body, { headers }).pipe(map(res => {
            return res;
        }));
    }
    public getRegister(key$: string) {
        console.log(`${this.API_ENDPOINT_2}${key$}.json`);
        return this.http.get<Registro>( `${ this.API_ENDPOINT_2 }${ key$ }.json` );
    }

}
