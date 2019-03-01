
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MatDialog } from "@angular/material";
import { AutorizacionService } from '../../services/autorizeService';
import { UserService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: "register-modal",
  templateUrl: "./register-modal.component.html",
  styleUrls: ["./register-modal.component.scss"],
})
export class RegisterModalComponent {
  form: FormGroup;
  lugares = null;

  constructor(
    private service: AutorizacionService,
    public dialogRef: MatDialogRef<RegisterModalComponent>,
    private fb: FormBuilder,
    public dialog: MatDialog,
    public resgister: UserService,
    private router: Router
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
  }

  onSubmit() {
    this.service.registro(this.emailControl.value, this.passwordControl.value);
    console.log(this.emailControl.value, this.passwordControl.value);
    this.resgister.newRegister(this.form.value).subscribe(
    );
  }
  regresar() {
    this.resgister.getRegister().subscribe((user) => {
      this.lugares = user;
      let me = this;
      me.lugares = Object.keys(me.lugares).map((key) =>
      me.lugares[key]);
      console.log("desde lugares" + me.lugares);
    });
  }

  get nameControl() { return this.form.get("name"); }
  get emailControl() { return this.form.get("email"); }
  get passwordControl() { return this.form.get("password"); }
  get weightControl() { return this.form.get("weight"); }
  get heightControl() { return this.form.get("height"); }
  get genderControl() { return this.form.get("gender"); }
  get ageControl() { return this.form.get("age"); }
}
