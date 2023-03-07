import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SideBarComponent } from './side-bar.component';
import { Route, RouterModule } from '@angular/router';
import { ClickOutsideDirective } from './directives/click-outside.directive';

const routes: Route[] = [];
@NgModule({
  declarations: [
    SideBarComponent,
    ClickOutsideDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    SideBarComponent,
    ClickOutsideDirective
  ]
})
export class SideBarModule { }
