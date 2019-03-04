// import { Injectable } from "@angular/core";
// import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
// import { Imc } from '../models/imc';

// @Injectable({
//     providedIn: "root"
// })

// export class ImcService {
//     imcCollection: AngularFirestoreCollection<Imc>;
//     constructor( private afs: AngularFirestore) {
//         this.imcCollection = afs.collection<Imc>("imc");
//     }
//     addImc(imc: Imc) {
//         this.imcCollection.add(imc);
//     }
//     getImc(id) {
//         return this.afs
//         .collection ("imc", ref => ref.where("userUid", "==", id)).valueChanges();
//     }
// }
