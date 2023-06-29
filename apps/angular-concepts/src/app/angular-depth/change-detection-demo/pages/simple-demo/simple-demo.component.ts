import {
  ApplicationRef,
  ChangeDetectorRef,
  Component,
  NgZone,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatButton } from '@angular/material/button';
import { fromEvent, throttleTime, interval, map, Subscription } from 'rxjs';
import { createRandomHero } from '../../helpers/hero.helper';
import { Hero } from '../../models/hero.model';
@Component({
  selector: 'thd-simple-demo',
  templateUrl: './simple-demo.component.html',
  styleUrls: ['./simple-demo.component.scss'],
})
export class SimpleDemoComponent implements OnInit {
  @ViewChild('ngZoneOutsideBtn') ngZoneOutsideBtn!: MatButton;
  heroes: Hero[] = [];
  time!: Date;
  timeSubscription?: Subscription;

  constructor(
    private ref: ApplicationRef,
    private cd: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}

  public ngOnInit(): void {
    this.heroes.push(createRandomHero());
    this.triggerOutsideAngularZone();
  }

  // I get called when Angular performs a change-detection digest.
  public ngDoCheck(): void {
    console.log('ngDoCheck() :', new Date());
  }

  public addHero(): void {
    this.heroes.push(createRandomHero());
  }

  public createNewHero(id: string): void {
    const index = this.heroes.findIndex((h) => h.id === id);
    const newHero = createRandomHero();
    this.heroes[index] = newHero;
  }

  public triggerSetTimeout(): void {
    setTimeout(() => {});
    this.triggerTick();
  }

  public triggerOutsideAngularZone(): void {
    this.ngZone.runOutsideAngular(() => {
      // using outside zone CD just trigger only one every time click this and show   console.log("ngDoCheck() :", new Date());
      fromEvent(this.ngZoneOutsideBtn._elementRef.nativeElement, 'click')
        .pipe(throttleTime(2000))
        .subscribe(() => {
          console.log('did not trigger change detection');
        });
    });
  }

  public triggerTick(): void {
    this.ref.tick();
  }

  public triggerMarkForCheck(): void {
    this.cd.markForCheck();
  }

  public triggerObservableTime(): void {
    if (this.timeSubscription) {
      this.timeSubscription.unsubscribe();
      this.timeSubscription = undefined;
      return;
    }

    this.timeSubscription = interval(1000)
      .pipe(map((i) => new Date()))
      .subscribe((time) => {
        this.time = time;
      });
  }
}
