import { CardItemsModule } from './../../shares/card-items/card-items.module';
import { CardItemsComponent } from './../../shares/card-items/card-items.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ChangeDetectionDemoRoutingModule } from './change-detection-demo-routing.module';
import { HeroCardOnPushComponent } from './components/hero-card-on-push/hero-card-on-push.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { SimpleDemoComponent } from './pages/simple-demo/simple-demo.component';
import { DetachDemoComponent } from './pages/detach-demo/detach-demo.component';
import { ChangeDetectionBoardComponent } from './change-detection-board.component';

const materials = [
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatTooltipModule
]

@NgModule({
  declarations: [
    ChangeDetectionBoardComponent,
    SimpleDemoComponent,
    HeroCardComponent,
    HeroDetailsComponent,
    HeroCardOnPushComponent,
    DetachDemoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ChangeDetectionDemoRoutingModule,
    CardItemsModule,
    ...materials
  ]
})

export class ChangeDetectionDemoModule { }
