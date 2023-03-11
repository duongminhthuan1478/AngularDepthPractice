import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Route, RouterModule } from '@angular/router';
import { DiServiceDemoX1Component } from './di-service-demo-x1/di-service-demo-x1.component';
import { DiServiceDemoX2Component } from './di-service-demo-x2/di-service-demo-x2.component';
import { DiServiceDemoComponent } from './di-service-demo.component';

const routes: Route[] = [
  { path: '', component: DiServiceDemoComponent, pathMatch: 'full' },
]

@NgModule({
  declarations: [
    DiServiceDemoComponent,
    DiServiceDemoX1Component,
    DiServiceDemoX2Component,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule
  ],
})
export class DiServiceDemoModule { }
