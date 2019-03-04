
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material";
import { ActivatedRoute, Router } from '@angular/router';
import { AutorizacionService } from '../../services/autorizeService';
import { UserService } from '../../services/users.service';

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

  constructor(
    private autorizacionService: AutorizacionService,
    public dialogRef: MatDialogRef<RegisterModalComponent>,
    private fb: FormBuilder,
    public dialog: MatDialog,
    public resgister: UserService,
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
    this.autorizacionService.login(this.emailControl.value, this.passwordControl.value);
    this.autorizacionService.signUp(this.form.value );
    this.dialogRef.close();
  }

  get nameControl() { return this.form.get("name"); }
  get emailControl() { return this.form.get("email"); }
  get passwordControl() { return this.form.get("password"); }
  get weightControl() { return this.form.get("weight"); }
  get heightControl() { return this.form.get("height"); }
  get genderControl() { return this.form.get("gender"); }
  get ageControl() { return this.form.get("age"); }
}
