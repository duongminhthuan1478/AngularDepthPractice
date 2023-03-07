import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'angular-in-depth', pathMatch: 'full' },
  { path: 'angular-in-depth', loadChildren: () => import('./angular-depth/angular-depth.module').then(m => m.AngularDepthModule) },
  { path: 'home', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
