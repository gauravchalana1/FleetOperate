import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material";
import { MatOptionModule } from "@angular/material";
import { MatSelectModule } from "@angular/material";
import { InformationComponent } from "./information.component";

@NgModule({
  declarations: [InformationComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule
  ],
  exports: [InformationComponent]
})
export class InformationModule {}
