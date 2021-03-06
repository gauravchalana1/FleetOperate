import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MainModule} from './components/main/main.module';
import {FileUploaderModule} from './components/file-uploader/file-uploader.module';
import { FileListComponent } from './components/file-list/file-list.component';
import { InformationModule } from './components/information/information.module';
import { FileListModule } from './components/file-list/file-list.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MainModule,
    FileUploaderModule,
    InformationModule,
    FileListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
