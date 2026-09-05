import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MediaObserverService } from './services/media-observer.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  imports: [RouterOutlet, HeaderComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  private readonly mediaObserverService = inject(MediaObserverService);
  protected readonly title = signal('Tile.Expert Developers');

  constructor() {
    this.mediaObserverService.startListen().pipe(takeUntilDestroyed()).subscribe();
  }
}
