import { Card } from './../../core/models/card/card.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'thd-card-items',
  templateUrl: './card-items.component.html',
  styleUrls: ['./card-items.component.scss']
})
export class CardItemsComponent {
  @Input() listCards: Card[] = [];
}
