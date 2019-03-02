import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatSelectModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import { AutorizacionService } from '../../services/autorizeService';
import { UserService } from '../../services/users.service';
import { RegisterModalComponent } from './register-modal.component';

@NgModule({
  declarations: [ RegisterModalComponent  ],
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
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule
  ],
  exports: [ RegisterModalComponent],
  entryComponents: [RegisterModalComponent],
  providers: [ AutorizacionService, AngularFireAuth, UserService],
})
export class RegisterModalModule { }
