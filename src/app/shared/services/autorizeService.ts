import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/Operators';
import { Registro } from '../models/users';
@Injectable()
export class AutorizacionService {
    user: Observable<Registro>;
    userId: string;
    constructor (
        private angularFireAuth: AngularFireAuth,
        public afs: AngularFirestore,
        private router: Router) {

    }


 login = (email, password) => {
    this.angularFireAuth.auth.signInWithEmailAndPassword (email, password)
    .then ((response) => {
        alert ('Usuario logeado con exito');
        this.router.navigate(["/landing"]);
        console.log(response);
    })
    .catch((error) => {
        alert('un error a ocurrido');
        console.log(error);
    });
}

registro = (email, password) => {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
    .then ((response) => {
        alert ('Usuario Registrado con exito');
        console.log(response);
    })
    .catch((error) => {
        alert('un error a ocurrido');
        console.log(error);
    });
}

getAuth() {
 this.angularFireAuth.authState.pipe(map(auth => auth));
}

logout() {
    return this.angularFireAuth.auth.signOut().then(() => {
        localStorage.removeItem("user");
        this.router.navigate(["/"]);
      });
  }

get isLoading() {
    return !!this.angularFireAuth.auth.currentUser;
  }

}
