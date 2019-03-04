import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RecommendationsComponent } from './recommendations.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule, MatNativeDateModule, MatDialogModule, MatDatepickerModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GraphicModule } from '../graphic/graphic.module';

const COMMON_IMPORTS = [
    CommonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    GraphicModule
];

const COMMON_DECLARATIONS = [RecommendationsComponent];

@NgModule({
    imports: COMMON_IMPORTS,
    declarations: COMMON_DECLARATIONS,
    exports: COMMON_DECLARATIONS,
})
export class RecommendatiosModule {}

export default {
    COMMON_IMPORTS,
    COMMON_DECLARATIONS
}
