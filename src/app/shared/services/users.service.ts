import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Registro } from '../models/users';
import { Weight } from '../models/wights';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class UserService {
    // API_ENDPOINT = 'https://weightfit-52010.firebaseio.com/users.json';
    // API_ENDPOINT_2 = 'https://weightfit-52010.firebaseio.com/users/';

    constructor(
        private http: HttpClient,
        private db: AngularFirestore,
        private afAuth: AngularFireAuth) { }

    // public newRegister(user: Registro) {
    //     const body = JSON.stringify(user);
    //     const headers = new HttpHeaders({ 'Content_Type': "application/json" });
    //     return this.http.post(this.API_ENDPOINT, body, { headers }).pipe(map(res => {
    //         return res;
    //     }));
    // }
    // public getRegister(key$: string) {
    //     console.log(`${this.API_ENDPOINT_2}${key$}.json`);
    //     return this.http.get<Registro>( `${ this.API_ENDPOINT_2 }${ key$ }.json` );
    // }
 getuser(email: string) {
     return this.db.collection("users", ref => ref.where("email", "==", email)).valueChanges();
 }
 addWeights(weight: Weight, email) {
    this.db.collection("users")
    .doc(email).collection("pesos")
    .doc(weight.date.toLocaleDateString("gregory")
    .replace(/\//g, "-")).set(weight);
  }

  getWeight(email) {
    return this.db
      .collection("users").doc(email).collection("pesos").valueChanges();
  }

  getWeightDate(email, start, end) {
    return this.db.collection("users").doc(email).collection("pesos", ref =>
        ref
          .where("date", ">=", start)
          .where("date", "<", end)
      )
      .valueChanges();
  }

}
