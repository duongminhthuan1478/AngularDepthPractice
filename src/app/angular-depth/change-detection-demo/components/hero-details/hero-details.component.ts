import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { AbstractChangeDetectionComponent } from '../abstract-change-detection.component';

@Component({
  selector: 'thd-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent extends AbstractChangeDetectionComponent{

  public constructor(
    el: ElementRef,
    zone: NgZone,
    cd: ChangeDetectorRef,
    http: HttpClient
  ) {
    super(el, zone, cd, http);
  }
}
