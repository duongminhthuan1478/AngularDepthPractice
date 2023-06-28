import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceTestDiService } from '../../../core/service/service-test-di.service';

@Component({
  selector: 'thd-di-service-demo-x1',
  templateUrl: './di-service-demo-x1.component.html',
  providers: [ServiceTestDiService],
})
export class DiServiceDemoX1Component implements OnInit {
  public currentCounter$!: Observable<number>;

  constructor(private counterService: ServiceTestDiService) {}

  public ngOnInit(): void {
    this.currentCounter$ = this.counterService.getCount$();
  }

  public count() {
    this.counterService.counter();
  }
}
