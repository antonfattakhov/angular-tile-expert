import { Component, ElementRef, inject, signal } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MediaObserverService } from '../../services/media-observer.service';
import { HistoryComponent } from '../history/history.component';
import { FiltersComponent } from '../filters/filters.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IconComponent } from '../icon/icon.component';

@Component({
  imports: [
    AsyncPipe,
    HistoryComponent,
    FiltersComponent,
    ReactiveFormsModule,
    IconComponent,
  ],
  selector: 'app-search',
  styleUrl: './search.component.scss',
  templateUrl: './search.component.html',
  host: {
    '(document:click)': 'onClickOutside($event)',
  },
})
export class SearchComponent {
  private readonly elementRef = inject(ElementRef);
  private readonly mediaObserverService = inject(MediaObserverService);

  readonly isMobileFormat$ = this.mediaObserverService.isMobileFormat$;

  readonly showSearchMenu = signal<boolean>(false);
  readonly showSearchMenuDropdown = signal<boolean>(false);

  readonly searchControl = new FormControl<string | null>(null);

  onSearchClicked(): void {
    this.showSearchMenu.set(true);
  }

  onClickOutside(event: Event): void {
    const target = event.target as HTMLElement;
    const clickedInside = this.elementRef.nativeElement.contains(target);

    if (clickedInside) {
      return;
    }

    this.closeSearchMenu();
  }

  onFocus(): void {
    this.showSearchMenuDropdown.set(true);
  }

  onBackClicked(): void {
    this.closeSearchMenu();
  }

  private closeSearchMenu(): void {
    this.showSearchMenu.set(false);
    this.showSearchMenuDropdown.set(false);
  }
}
