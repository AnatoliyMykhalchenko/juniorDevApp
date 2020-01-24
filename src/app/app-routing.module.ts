import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FigureComponent } from './components/figure/figure.component';
import { DeveloperComponent } from './components/developer/developer.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'random',
    pathMatch: 'full'
  },
  {
    path: 'random',
    component: FigureComponent
  },
  {
    path: 'developer',
    component: DeveloperComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
