import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, Output, EventEmitter } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, combineLatest } from 'rxjs';

interface ITaskContainer {
  title: string;
  taskList: ITask[];
}

interface ITask {
    title: string;
    description?: string;
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskComponent {
  @Output()
  public onTaskClick = new EventEmitter<any>();

  @Output()
  public onAppendTaskClick = new EventEmitter<any>();

  public arr: ITaskContainer[] = [
    {
      title: 'to-do',
      taskList: [
        {
          title: 'sdadsds',
          description: 'dasldasl',
        },
        {
          title: 'd32'
        },
        {
          title: '43543'
        }
      ],
    },
    {
      title: 'done',
      taskList: [
        {
          title: 'fdgdgd'
        },
        {
          title: 'sd'
        },
        {
          title: 'kjljlj'
        }
      ],
    },
    {
      title: '321123',
      taskList: [
        {
          title: 'vfd'
        },
        {
          title: 'add'
        },
        {
          title: 'fdsfsd'
        }
      ],
    }
  ];

  public onDrop(event: CdkDragDrop<ITask[]>) {
    const data = { ...event.item.data };
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    const newData = [...event.container.data];
    console.log(data, newData);
  }
}
