import { ControlValueAccessorComponent } from './control-value-accessor/control-value-accessor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularTutorialsComponent } from './angular-tutorials.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorial-items', pathMatch: 'full' },
  { path: 'tutorial-items', component: AngularTutorialsComponent },
  { path: 'control-value-accessor', component: ControlValueAccessorComponent },
  {
    path: 'change-detection',
    loadChildren: () =>
      import('./change-detection-demo/change-detection-demo.module').then(
        (m) => m.ChangeDetectionDemoModule
      ),
  },
  {
    path: 'di-service-demo',
    loadChildren: () =>
      import('./di-service-demo/di-service-demo.module').then(
        (m) => m.DiServiceDemoModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularDepthRoutingModule {}
