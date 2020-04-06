import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent, FormComponent } from './pages';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ingresso/:idMovie', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
