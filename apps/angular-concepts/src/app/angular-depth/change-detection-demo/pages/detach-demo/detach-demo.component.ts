import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { createRandomHero } from '../../helpers/hero.helper';
import { Hero } from '../../models/hero.model';

@Component({
  selector: 'thd-detach-demo',
  templateUrl: './detach-demo.component.html',
  styleUrls: ['./detach-demo.component.scss'],
})
export class DetachDemoComponent implements OnDestroy, OnInit {
  private _subscription!: Subscription;
  public hero: Hero = createRandomHero();

  public ngOnInit(): void {
    this._subscription = interval(1000).subscribe((v) => {
      this.hero = createRandomHero();
    });
  }

  public ngOnDestroy(): void {
    if (this._subscription) this._subscription.unsubscribe();
  }
}
