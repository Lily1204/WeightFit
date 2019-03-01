import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { NavbarComponent } from "./navbar.component";
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const COMMON_IMPORTS = [
    CommonModule, 
    MatToolbarModule, 
    FlexLayoutModule, 
    MatButtonModule, 
    MatIconModule
];

const COMMON_DECLARATIONS = [NavbarComponent];

@NgModule({
    imports: COMMON_IMPORTS,
    declarations: COMMON_DECLARATIONS,
    exports: COMMON_DECLARATIONS
})
export class NavbarModule{}

export default {
    COMMON_IMPORTS,
    COMMON_DECLARATIONS
}