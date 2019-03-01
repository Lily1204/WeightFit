import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Injectable()
export class AutorizacionService {
    constructor (private angularFireAuth: AngularFireAuth,
        private router: Router) {
    //    this.isLogged();
    }
public login = (email, password) => {
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
public registro = (email, password) => {
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
// para saber si el usuario esta logeado
/*
public isLogged() {
return this.angularFireAuth.authState;
}*/
}
