import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
];
const config = RouterModule.forRoot(routes);

@NgModule({
  imports: [config],
  exports: [RouterModule],
})
export class AppRoutingModule {}
