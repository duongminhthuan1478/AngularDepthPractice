import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../core/models/card/card.model';

@Component({
  selector: 'thd-angular-tutorials',
  templateUrl: './angular-tutorials.component.html',
  styleUrls: ['./angular-tutorials.component.scss']
})
export class AngularTutorialsComponent {

  public tutorialCards$!: Observable<Card[]>;

  public constructor(private http: HttpClient) {
    this.tutorialCards$ = this.http.get<Card[]>('assets/data/tutorial-card.json') as Observable<Card[]>;
  }

}
