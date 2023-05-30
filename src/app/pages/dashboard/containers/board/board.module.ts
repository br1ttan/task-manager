import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { BoardRouting } from './board.routing';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TaskComponent, ModalContentComponent } from './components';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalAppenderComponent } from './components/modal-appender/modal-appender.component';

@NgModule({
  declarations: [
    BoardComponent,
    TaskComponent,
    ModalContentComponent,
    ModalAppenderComponent
  ],
  imports: [
    CommonModule,
    BoardRouting,
    DragDropModule,
    NgbModalModule
  ]
})
export class BoardModule { }
