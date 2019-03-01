
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MatDialog } from "@angular/material";
import { AutorizacionService } from '../../services/autorizeService';
import { Router } from '@angular/router';

@Component({
  selector: "login-modal",
  templateUrl: "./login-modal.component.html",
  styleUrls: ["./login-modal.component.scss"],
})
export class LoginModalComponent {

  form: FormGroup;

  constructor(
    private service: AutorizacionService,
    public dialogRef: MatDialogRef<LoginModalComponent>,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router
  ) {

    this.form = fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  onSubmit() {

    this.service.login(this.emailControl.value, this.passwordControl.value);
    this.dialogRef.close();
  }

  get emailControl() { return this.form.get("email"); }
  get passwordControl() { return this.form.get("password"); }
}
