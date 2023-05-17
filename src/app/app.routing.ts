import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRouteEnum } from '@core';
import { MainComponent } from '@layouts';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: AppRouteEnum.Home,
        loadChildren: () => import('@pages/home')
          .then((m) => m.HomeModule)
      },
      {
        path: AppRouteEnum.Dashboard,
        loadChildren: () => import('@pages/dashboard')
          .then((m) => m.DashboardModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
