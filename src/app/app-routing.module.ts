import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashBoradComponent } from './dash-borad/dash-borad.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroManegerComponent } from './hero-maneger/hero-maneger.component';

const routes: Routes = [
  {path: 'dashBoard', component: DashBoradComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'manager/:id', component: HeroManegerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
