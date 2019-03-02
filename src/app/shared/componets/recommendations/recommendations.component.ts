import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { Imc } from '../../models/imc';
import { Registro } from '../../models/users';
import { AutorizacionService } from '../../services/autorizeService';
import { UserService } from '../../services/users.service';

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

  }
  onSubmit() {
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
