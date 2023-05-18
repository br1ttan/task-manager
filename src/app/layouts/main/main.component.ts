import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {
  public get sidenavBackground(): string {
    return 'rgb(11 13 14 / 90%)';
  }

  public isExpanded = true;

  public toggleExpand(): void {
    this.isExpanded = !this.isExpanded;
  }
}
