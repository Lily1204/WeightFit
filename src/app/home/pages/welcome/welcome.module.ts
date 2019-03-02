import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule, MatIconModule, MatInputModule } from "@angular/material";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { LoginModalModule } from 'src/app/shared/componets/login-modal/login-modal.module';
import { NavbarModule } from 'src/app/shared/componets/navbar/navbar.module';
import { RegisterModalModule } from 'src/app/shared/componets/register-modal/register-modal.module';
import { WelcomeComponent } from "./welcome.component";


// const routes: Routes = [{
//   path: '',
//   component: WelcomeComponent
// }];

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
  LoginModalModule,
  RegisterModalModule,
  NavbarModule,
];
const COMMON_DECLARATIONS = [WelcomeComponent];
const COMMON_EXPORTS = [WelcomeComponent];

export default {
  COMMON_IMPORTS,
  COMMON_DECLARATIONS,
  COMMON_EXPORTS
};

@NgModule({
  imports: [COMMON_IMPORTS ],
  exports: [COMMON_DECLARATIONS],
  declarations: [COMMON_DECLARATIONS],
})
export class WelcomeModule { }
