import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from './models/menu-item.model';

type SideBarMode = 'default' | 'push';

@Component({
  selector: 'thd-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  @Input() mode: SideBarMode = 'default';

  public listMenu: MenuItem[] = [
    {
      label: 'Home',
      icon: 'content_paste',
      routerLink: '/home',
    },
    {
      label: 'Angular Tutorials',
      icon: 'library_books',
      routerLink: '/angular-in-depth',
      expanded: false,
      items: [{
        label: 'Change Detection',
        routerLink: '/angular-in-depth/cd-board',
      }, {
        label: 'DI Service',
        routerLink: '/angular-in-depth/di-service-demo',
      }]
    }
  ]
  sidebarOpened = false;

  toggleSidebar() {
    this.sidebarOpened = !this.sidebarOpened;
  }

  closeSideBar() {
    this.sidebarOpened = false;
  }

}
