import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CardItemsComponent } from './../shares/card-items/card-items.component';

import { AngularDepthRoutingModule } from './angular-depth-routing.module';
import { AngularTutorialsComponent } from './angular-tutorials.component';
import { ChangeDetectionDemoModule } from './change-detection-demo/change-detection-demo.module';
import { ControlValueAccessorComponent } from './control-value-accessor/control-value-accessor.component';
import { QuantityComponent } from './control-value-accessor/quantity/quantity.component';

const material = [
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule
]

@NgModule({
  declarations: [
    ControlValueAccessorComponent,
    QuantityComponent,
    AngularTutorialsComponent,
    CardItemsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularDepthRoutingModule,
    ReactiveFormsModule,
    ChangeDetectionDemoModule,
    ...material,
  ]
})
export class AngularDepthModule { }
