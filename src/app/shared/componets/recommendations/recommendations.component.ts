import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { Registro } from '../../models/users';
import { AutorizacionService } from '../../services/autorizeService';
import { UserService } from '../../services/users.service';
import { Weight } from '../../models/wights';
import { MatDialogRef, MatDialog } from '@angular/material';

@Component({
    selector: "recommendations",
    templateUrl: './recommendations.component.html',
    styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent implements OnInit {

    dataUser: Registro[] = [];
    id: string;
    new = false;
    form: FormGroup;
    imc: number;
    weighs: Weight[] = [];

constructor(
    public resgister: UserService,
    public  fb: FormBuilder,
    public service: AutorizacionService,
    private userService: UserService,
    private afAuth: AngularFireAuth,
    public dialog: MatDialog) {
        this.form = fb.group({
          date: [(new Date()).toISOString(), [Validators.required]],
          weight: ["", [Validators.required]],
          });
}
ngOnInit() {
  this.afAuth.user.subscribe(data => {
    this.userService.getuser(data.email).subscribe(dat => {
      this.dataUser = dat;
      const h = this.dataUser[0].height;
        this.getImc(h);
      return this.dataUser;
    });
  });
  }

  onSubmit() {
     this.addWeight(this.form.value);
  }

  addWeight(weight) {
    this.afAuth.user.subscribe(data => {
        this.userService.addWeights(weight, data.email);
      });
  }

  getImc(heigth) {
    this.afAuth.user.subscribe(data => {
      this.userService.getWeight(data.email).subscribe(d => {
        this.weighs = d;
        this.imc = Math.round( this.weighs[this.weighs.length - 1].weight / Math.pow(heigth, 2));
        return this.imc;
      });
    });
  }

  get date() {
    return this.form.get("date");
  }
  get weight() {
    return this.form.get("weight");
  }
}
