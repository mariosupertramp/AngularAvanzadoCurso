import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ProgressComponent } from '../pages/progress/progress.component';
import { Grafica1Component } from '../pages/grafica1/grafica1.component';
import { PagesComponent } from '../pages/pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
     {path: 'dashboard', component: DashboardComponent},
     {path: 'progress', component: ProgressComponent},
     {path: 'grafica1', component: Grafica1Component},
     {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]

   },
];


@NgModule({
  declarations: [

  ],
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})


export class PagesRoutingModule {}
