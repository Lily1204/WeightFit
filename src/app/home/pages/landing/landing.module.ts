import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule, MatIconModule, MatInputModule } from "@angular/material";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModalModule } from 'src/app/shared/componets/login-modal/login-modal.module';
import { RegisterModalModule } from 'src/app/shared/componets/register-modal/register-modal.module';
import { LandingComponent } from './landing.component';
import { NavbarModule } from 'src/app/shared/componets/navbar/navbar.module';
import { Routes, RouterModule } from '@angular/router';
import { RecommendatiosModule } from 'src/app/shared/componets/recommendations/recommendations.module';

const routes: Routes = [{
  path: 'landing',
  component: LandingComponent
}];

const COMMON_IMPORTS = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  FlexLayoutModule,
  MatCheckboxModule,
  MatIconModule,
  BrowserAnimationsModule,
  LoginModalModule,
  RegisterModalModule,
  NavbarModule,
  RecommendatiosModule
];
const COMMON_DECLARATIONS = [LandingComponent];
const COMMON_EXPORTS = [LandingComponent];

export default {
  COMMON_IMPORTS,
  COMMON_DECLARATIONS,
  COMMON_EXPORTS
};

@NgModule({
  imports: [COMMON_IMPORTS,  RouterModule.forChild(routes)],
  exports: [COMMON_DECLARATIONS],
  declarations: [COMMON_DECLARATIONS],
})
export class LandingModule {}
