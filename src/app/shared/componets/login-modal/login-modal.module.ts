import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatSelectModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginModalComponent } from './login-modal.component';

@NgModule({
  declarations: [ LoginModalComponent  ],
  imports: [
    CommonModule,
    MatButtonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatIconModule,
  ],
  exports: [ LoginModalComponent ],
  entryComponents: [LoginModalComponent],
})
export class LoginModalModule { }
