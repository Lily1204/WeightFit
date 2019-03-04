import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Registro } from '../models/users';


@Injectable(
    { providedIn: "root" }
)
export class AutorizacionService {
    user: Observable<Registro>;
    userId: string;
    constructor (
        private angularFireAuth: AngularFireAuth,
        private router: Router,
        private afs: AngularFirestore) {

        this.user = this.angularFireAuth.authState.pipe(
            switchMap(user => {
                if (user) {
                    return this.afs.doc<Registro>(`users/${user.uid}`).valueChanges();
                } else {
                    return of (null);
                }
            })
        );
    }

 login = (email, password) => {
    this.angularFireAuth.auth
    .signInWithEmailAndPassword (email, password)
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

signUp = (user: Registro) => {
     this.angularFireAuth.auth
    .createUserWithEmailAndPassword(user.email, user.password)
    .then(response => {
        user.uid = response.user.uid;
        this.updateUserData({
            uid: user.uid,
            name: user.name,
            email: user.email,
            weight: user.weight,
            height: user.height,
            age: user.age
        }).then(() => {
            this.router.navigate(["/landing"]);
            this.login(user.email, user.password );
        });
    })
    .catch(error => {
        window.alert(error.message);
    });
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

updateUserData(user: Registro) {
    return this.afs.collection('users').doc(user.email).set(user);
  }
}
