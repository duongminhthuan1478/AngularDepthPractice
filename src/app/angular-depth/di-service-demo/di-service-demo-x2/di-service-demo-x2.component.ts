import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceTestDiService } from './../../../core/service/service-test-di.service';

@Component({
  selector: 'thd-di-service-demo-x2',
  templateUrl: './di-service-demo-x2.component.html',
})
export class DiServiceDemoX2Component {

  public currentCounter$!: Observable<number>;

  constructor(private counterService: ServiceTestDiService) {  }

  public ngOnInit(): void {
    this.currentCounter$ = this.counterService.getCount$();
  }

  public count() {
    this.counterService.counter();
  }
}
