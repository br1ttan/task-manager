import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task-manager';

  isExpanded = true;
  state = 'collapsed';

  toggleSidenav() {
    this.isExpanded = !this.isExpanded;
  }

}
