import { ComponentType } from "@angular/cdk/portal";
import { Injectable, TemplateRef } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material";

@Injectable({
  providedIn: "root",
})
export class ModalService {
  constructor(private dialog: MatDialog) {}

  open(
    componentOrTemplate: ComponentType<{}> | TemplateRef<{}>,
    config?: MatDialogConfig
  ) {
    return this.dialog.open(componentOrTemplate, config).afterClosed();
  }

  close(componentOrTemplate: ComponentType<{}> | TemplateRef<{}>) {
    return this.dialog.closeAll();
  }
}
