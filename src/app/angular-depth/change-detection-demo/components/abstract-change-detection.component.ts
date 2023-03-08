import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, Input, NgZone } from '@angular/core';
import { getNewHeroAge, getNewHeroName } from '../helpers/hero.helper';
import { Hero } from '../models/hero.model';

@Component({
  template: ''
})
export abstract class AbstractChangeDetectionComponent {
  @Input() hero!: Hero;

  protected constructor(
    private el: ElementRef, //selector Element which was inherited it
    private zone: NgZone,
    public cd: ChangeDetectorRef,
    private http: HttpClient
  ) { }

  public changeName(): void {
    this.hero.name = getNewHeroName();
  }

  public changeAge(): void {
    this.hero.details.age = getNewHeroAge();
  }

  public loadNameViaHttp() {
    this.http
      .get<{ name: string }>(`./assets/data/hero.data.json`)
      .subscribe(res => this.hero.name = res.name);
  }

  public blink() {
    this.el.nativeElement.classList.add('highlight');
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.el.nativeElement.classList.remove('highlight');
      }, 1500);
    });
  }
}
