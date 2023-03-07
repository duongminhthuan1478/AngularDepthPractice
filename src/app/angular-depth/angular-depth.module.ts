import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularDepthRoutingModule } from './angular-depth-routing.module';
import { ControlValueAccessorComponent } from './control-value-accessor/control-value-accessor.component';
import { QuantityComponent } from './control-value-accessor/quantity/quantity.component';


const material = [
  MatFormFieldModule,
  MatInputModule
]

@NgModule({
  declarations: [
    ControlValueAccessorComponent,
    QuantityComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularDepthRoutingModule,
    ReactiveFormsModule,
    ...material,
  ]
})
export class AngularDepthModule { }
