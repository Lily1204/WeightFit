import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/users.service';
import { AutorizacionService } from '../../services/autorizeService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Imc } from '../../models/imc';
import { Registro } from '../../models/users';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
    selector: 'recommendations',
    templateUrl: './recommendations.component.html',
    styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent implements OnInit {

    dataUser: Registro[] = [];
    id: string;
    new = false;
    form: FormGroup;
    imc: number;
    userImc: Imc;

constructor(
    public resgister: UserService,
    public  fb: FormBuilder,
    public service: AutorizacionService,
    private userService: UserService,
    private afAuth: AngularFireAuth) {
        this.form = fb.group({
            weight: ["", Validators.required],
            height: ["", Validators.required],
            createdDate: ["", Validators.required]
          });
}
ngOnInit() {

      this.afAuth.user.subscribe(data => {
        this.userService.getUsers(data.email).subscribe(dat => {
          this.dataUser = dat;
          return this.dataUser;
        });
      });
  }
  onSubmit() {

    // const weight = this.form.get("weight").value;
    // const height = this.form.get("height").value / 100;
    // this.imc = weight / (height * height);

    // this.userImc = {
    //   userUid: this.service.userId,
    //   imc: this.imc.toFixed(2),
    //   weight: this.form.get("weight").value,
    //   height: this.form.get("height").value,
    //   createdDate: this.form.get("createdDate").value
    // };

    // this.imcService.addImc(this.userImc);
    // this.form.reset();
  }
  get date() {
    return this.form.get("createdDate");
  }

  get weight() {
    return this.form.get("weight");
  }
  get height() {
    return this.form.get("height");
  }
}
