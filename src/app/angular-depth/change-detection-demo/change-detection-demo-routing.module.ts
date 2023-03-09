import { SimpleDemoComponent } from './pages/simple-demo/simple-demo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeDetectionBoardComponent } from './change-detection-board.component';
import { DetachDemoComponent } from './pages/detach-demo/detach-demo.component';
import { ComplexDemoComponent } from './pages/complex-demo/complex-demo.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cd-board' },
  { path: 'cd-board', component: ChangeDetectionBoardComponent },
  { path: 'simple-demo', component: SimpleDemoComponent },
  { path: 'complex-demo', component: ComplexDemoComponent },
  { path: 'detach-demo', component: DetachDemoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeDetectionDemoRoutingModule { }
