import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule, MatDialogModule, MatSelectModule, MatIconModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RegisterModalComponent } from './register-modal.component';
import { AutorizacionService } from '../../services/autorizeService';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { UserService } from '../../services/users.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

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
