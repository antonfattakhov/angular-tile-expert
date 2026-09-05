import { Component, inject, signal } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { MediaObserverService } from '../../services/media-observer.service';
import { AsyncPipe, NgTemplateOutlet } from '@angular/common';

@Component({
  imports: [IconComponent, AsyncPipe, NgTemplateOutlet],
  selector: 'app-menu',
  styleUrl: './menu.component.scss',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  private readonly mediaObserverService = inject(MediaObserverService);

  readonly isMobileFormat$ = this.mediaObserverService.isMobileFormat$;

  readonly showMobileMenu = signal<boolean>(false);

  onBurgerClicked(): void {
    this.showMobileMenu.set(true);
  }

  onCloseButtonClicked(): void {
    this.showMobileMenu.set(false);
  }
}
