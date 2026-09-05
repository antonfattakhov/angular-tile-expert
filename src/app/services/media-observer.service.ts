import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, fromEvent, debounceTime, tap, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MediaObserverService {
  readonly isMobileFormat$ = new BehaviorSubject<boolean | null>(null);

  private readonly mobileWidth = 850;

  startListen(): Observable<unknown> {
    return fromEvent(window, 'resize').pipe(
      startWith(window.outerWidth),
      debounceTime(100),
      tap(() => this.setBreakpoints()),
    );
  }

  private setBreakpoints(): void {
    const isMobileFormat = window.outerWidth <= this.mobileWidth;

    this.isMobileFormat$.next(isMobileFormat);
  }
}
