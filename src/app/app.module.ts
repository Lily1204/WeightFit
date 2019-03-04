
import { NgModule } from '@angular/core';
import { AngularFireModule } from "angularfire2";
import { environment } from "../environments/environment";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LandingModule } from './home/pages/landing/landing.module';
import { WelcomeModule } from './home/pages/welcome/welcome.module';
import { FooterModule } from './shared/componets/footer/footer.module';
import { NavbarModule } from './shared/componets/navbar/navbar.module';
import { AutorizacionService } from './shared/services/autorizeService';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AuthGuard } from './shared/services/auth.guard';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    NavbarModule,
    FooterModule,
    WelcomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    LandingModule,
    AngularFirestoreModule

  ],
  providers: [AuthGuard, AutorizacionService, { provide: FirestoreSettingsToken, useValue: {}} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
