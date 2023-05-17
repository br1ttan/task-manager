import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main';
import { HeaderModule, SidebarModule } from './components';
import { RouterModule } from '@angular/router';
import { SidenavModule } from 'angular-ng-sidenav';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    SidebarModule,
    RouterModule,
    SidenavModule
  ],
  exports: [
    MainComponent
  ]
})
export class LayoutsModule { }
