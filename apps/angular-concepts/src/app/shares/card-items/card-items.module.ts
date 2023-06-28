import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { CardItemsComponent } from './card-items.component';

@NgModule({
  declarations: [CardItemsComponent],
  exports: [CardItemsComponent],
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule],
})
export class CardItemsModule {}
