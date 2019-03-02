import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LandingComponent } from './home/pages/landing/landing.component';
import { WelcomeComponent } from './home/pages/welcome/welcome.component';

const routes: Routes = [

  {path: '', component: WelcomeComponent},
  {path: 'landing', component: LandingComponent, canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
