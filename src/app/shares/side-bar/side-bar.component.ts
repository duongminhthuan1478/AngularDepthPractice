import { Component, EventEmitter, Input, Output } from '@angular/core';

type SideBarMode = 'default' | 'push';

@Component({
  selector: 'thd-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  @Input() mode: SideBarMode = 'default';

  sidebarOpened = true;

  toggleSidebar() {
    this.sidebarOpened = !this.sidebarOpened;
  }

  closeSideBar() {
    this.sidebarOpened = false;
  }

}
