import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RecommendationsComponent } from './recommendations.component';

const COMMON_IMPORTS = [
    CommonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule
];

const COMMON_DECLARATIONS = [RecommendationsComponent];

@NgModule({
    imports: COMMON_IMPORTS,
    declarations: COMMON_DECLARATIONS,
    exports: COMMON_DECLARATIONS
})
export class RecommendatiosModule {}

export default {
    COMMON_IMPORTS,
    COMMON_DECLARATIONS
}