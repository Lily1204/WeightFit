import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginModalComponent } from './login-modal.component';
import { MatButtonModule, MatInputModule, MatDialogModule, MatSelectModule, MatIconModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

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
  entryComponents: [LoginModalComponent]
})
export class LoginModalModule { }
