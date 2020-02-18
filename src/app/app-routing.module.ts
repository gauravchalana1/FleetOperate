import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { FileListComponent } from './components/file-list/file-list.component';
import { InformationComponent } from './components/information/information.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'testing',
    component: FileUploaderComponent
  },
  {
    path: 'testhere',
    component: FileListComponent

  },
  {
    path: 'upd', 
    component: InformationComponent
  }
];
const config = RouterModule.forRoot(routes);

@NgModule({
  imports: [config],
  exports: [RouterModule],
})
export class AppRoutingModule {}
