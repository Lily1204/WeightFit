import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FooterComponent } from "./footer.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";

const COMMON_IMPORTS = [
    FlexLayoutModule, 
    MatToolbarModule, 
    MatDividerModule, 
    MatIconModule,
    MatButtonModule
];
const COMMON_DECLARATIONS = [FooterComponent];

@NgModule({
    imports: COMMON_IMPORTS,
    declarations: COMMON_DECLARATIONS,
    exports: COMMON_DECLARATIONS
})
export class FooterModule{}

export default {
    COMMON_IMPORTS,
    COMMON_DECLARATIONS
}