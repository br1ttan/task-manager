import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IsActiveMatchOptions } from '@angular/router';
import { RouterLink, ExtraOptions, RouterLinkActive } from '@angular/router';
import { AppRouteEnum } from '@core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  public readonly activeRouteOptions: IsActiveMatchOptions = {
    fragment: 'exact',
    matrixParams: 'exact',
    paths: 'exact',
    queryParams: 'exact'
  }
  
  public appRouteEnum = AppRouteEnum;
  
  public breakText(text: string): string {
    return `${text.slice(0, 27)}...`;
  }
}
