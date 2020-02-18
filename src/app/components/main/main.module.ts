import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material";
import { MainComponent } from "./main.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material";
import { MatOptionModule } from "@angular/material";
import { MatSelectModule } from "@angular/material";
import { FileUploaderModule } from "../file-uploader/file-uploader.module";
import { FileListModule } from "../file-list/file-list.module";
import { InformationModule } from "../information/information.module";

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    FileUploaderModule,
    InformationModule,
    FileListModule,
    FormsModule
  ]
})
export class MainModule {}
