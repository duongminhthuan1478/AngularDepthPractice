import { Observable } from 'rxjs';
import { ServiceTestDiService } from './../../core/service/service-test-di.service';
import { Component, Injector, OnInit } from '@angular/core';

@Component({
  selector: 'thd-di-service-demo',
  templateUrl: './di-service-demo.component.html',
  providers: [ServiceTestDiService],
})
export class DiServiceDemoComponent implements OnInit {
  public currentCounter$!: Observable<number>;
  private counterService: ServiceTestDiService;

  constructor(private injector: Injector) {
    this.counterService = this.injector.get(ServiceTestDiService);
  }

  public ngOnInit(): void {
    this.currentCounter$ = this.counterService.getCount$();
  }

  public count() {
    this.counterService.counter();
  }
}
