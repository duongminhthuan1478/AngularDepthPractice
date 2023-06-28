import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
} from '@angular/core';
import { getHeroCardTemplate } from '../../templates/hero-card.template';
import { AbstractChangeDetectionComponent } from '../abstract-change-detection.component';

@Component({
  selector: 'thd-hero-card-on-push',
  template: getHeroCardTemplate(),
  styleUrls: ['./hero-card-on-push.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroCardOnPushComponent extends AbstractChangeDetectionComponent {
  public constructor(
    el: ElementRef, //ref host itself
    zone: NgZone,
    cd: ChangeDetectorRef,
    http: HttpClient
  ) {
    super(el, zone, cd, http);
  }
}
