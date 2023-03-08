import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { getHeroCardTemplate } from '../../templates/hero-card.template';
import { AbstractChangeDetectionComponent } from '../abstract-change-detection.component';

@Component({
  selector: 'thd-hero-card',
  template: getHeroCardTemplate(),
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent extends AbstractChangeDetectionComponent {

  public constructor(
    el: ElementRef, //thd-hero-card ref itself
    zone: NgZone,
    cd: ChangeDetectorRef,
    http: HttpClient,
  ) {
    super(el, zone, cd, http);
  }
}
