import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { GraphicComponent } from "./graphic.component";
import { ChartsModule } from "ng2-charts";
import { MatTableModule } from '@angular/material';

export const COMMON_IMPORTS = [
  CommonModule,
  FlexLayoutModule,
  MatListModule,
  MatIconModule,
  ChartsModule,
  MatButtonToggleModule,
  MatTableModule
];

export const COMMON_DECLARATIONS = [GraphicComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
  // entryComponents: [GraphicComponent],
})

export class GraphicModule {}
