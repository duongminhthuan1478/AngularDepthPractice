import { ControlValueAccessorComponent } from './control-value-accessor/control-value-accessor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'control-value-accessor', pathMatch: 'full' },
  { path: 'control-value-accessor', component: ControlValueAccessorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularDepthRoutingModule { }
