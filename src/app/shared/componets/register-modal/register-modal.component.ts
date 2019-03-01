
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MatDialog } from "@angular/material";
import { AutorizacionService } from '../../services/autorizeService';
import { UserService } from '../../services/users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Registro } from '../../models/users';

@Component({
  selector: "register-modal",
  templateUrl: "./register-modal.component.html",
  styleUrls: ["./register-modal.component.scss"],
})
export class RegisterModalComponent  {
  form: FormGroup;
  datas = null;
  id: string;
  new = false;

  user: Registro = {
    name: "liliana",
    email: "lili@hotmail.com",
    password: "",
    weight: 0,
    height: 0
  };

  constructor(
    private service: AutorizacionService,
    public dialogRef: MatDialogRef<RegisterModalComponent>,
    private fb: FormBuilder,
    public dialog: MatDialog,
    public resgister: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
      weight: [0, Validators.required],
      height: [0, Validators.required],
      gender: ["", Validators.required],
      age: [0, Validators.required],
    });
    this.route.params.subscribe( params => {
      this.id = params['id'];
      if (this.id !== "new") {
        this.resgister.getRegister(this.id)
        .subscribe(data => this.user = data);
      }
    });
  }

  onSubmit() {
    this.service.registro(this.emailControl.value, this.passwordControl.value);
    console.log(this.emailControl.value, this.passwordControl.value);
    this.resgister.newRegister(this.form.value).subscribe(
    );
  }


  get nameControl() { return this.form.get("name"); }
  get emailControl() { return this.form.get("email"); }
  get passwordControl() { return this.form.get("password"); }
  get weightControl() { return this.form.get("weight"); }
  get heightControl() { return this.form.get("height"); }
  get genderControl() { return this.form.get("gender"); }
  get ageControl() { return this.form.get("age"); }
}
