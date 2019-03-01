import { Component } from "@angular/core";
import { MatDialog } from '@angular/material';
import { ModalService } from 'src/app/shared/services/modal.service';
import { LoginModalComponent } from 'src/app/shared/componets/login-modal/login-modal.component';
import { RegisterModalComponent } from 'src/app/shared/componets/register-modal/register-modal.component';


@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"],
})
export class WelcomeComponent  {
constructor(public dialog: MatDialog, modalService: ModalService, ) {}

login() {
  this.dialog.open(LoginModalComponent);
  }
sign() {
  this.dialog.open(RegisterModalComponent);
  }
}

