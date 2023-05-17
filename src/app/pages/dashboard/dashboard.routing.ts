import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardRouteEnum } from './enums';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: DashboardRouteEnum.Board,
    loadChildren: () => import('./containers/board')
      .then((m) => m.BoardModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRouting { }
