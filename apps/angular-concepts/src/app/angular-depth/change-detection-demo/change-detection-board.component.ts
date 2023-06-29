import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from './../../core/models/card/card.model';

@Component({
  selector: 'thd-change-detection-board',
  templateUrl: './change-detection-board.component.html',
  styleUrls: ['./change-detection-board.component.scss'],
})
export class ChangeDetectionBoardComponent {
  public cdCards$!: Observable<Card[]>;

  public constructor(private http: HttpClient) {
    this.cdCards$ = this.http.get<Card[]>(
      'assets/data/cd-cards.json'
    ) as Observable<Card[]>;
  }
}
