
import { NgModule } from '@angular/core';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import { LandingModule } from './home/pages/landing/landing.module';
import { WelcomeModule } from './home/pages/welcome/welcome.module';
import { FooterModule } from './shared/componets/footer/footer.module';
import { NavbarModule } from './shared/componets/navbar/navbar.module';
import { AutorizacionService } from './shared/services/autorizeService';
import { AngularFirestoreModule } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    NavbarModule,
    FooterModule,
    WelcomeModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    LandingModule,

  ],
  providers: [AuthGuard, AutorizacionService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
