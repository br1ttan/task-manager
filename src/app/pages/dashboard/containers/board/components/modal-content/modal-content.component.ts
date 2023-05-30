import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalContentComponent { 
  @Input()
  public data?: any;
}
