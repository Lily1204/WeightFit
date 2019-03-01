
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarModule } from './shared/componets/navbar/navbar.module';
import { FooterModule } from './shared/componets/footer/footer.module';
import { WelcomeModule } from './home/pages/welcome/welcome.module';
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireModule } from "angularfire2";
import { environment } from "../environments/environment";
import { LandingModule } from './home/pages/landing/landing.module';
import { AppRoutingModule } from './app-routing.module';
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
    AngularFireModule.initializeApp(environment.firebase),
    LandingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
