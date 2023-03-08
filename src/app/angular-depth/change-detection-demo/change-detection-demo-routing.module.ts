import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeDetectionBoardComponent } from './components/change-detection-board/change-detection-board.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cd-board' },
  { path: 'cd-board', component: ChangeDetectionBoardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeDetectionDemoRoutingModule { }
