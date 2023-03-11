import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable(
  { providedIn: 'any' }
)
export class ServiceTestDiService {

  private _count = 0;
  private _count$ = new BehaviorSubject<number>(this._count);

  constructor() { }

  public counter(): void {
    this._count++;
    this._count$.next(this._count);
  }

  public getCount$(): Observable<number> {
    return this._count$.asObservable();
  }
}
