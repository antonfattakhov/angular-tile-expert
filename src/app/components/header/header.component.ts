import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { SearchComponent } from '../search/search.component';
import { IconComponent } from '../icon/icon.component';
import { MediaObserverService } from '../../services/media-observer.service';
import { AsyncPipe } from '@angular/common';

@Component({
  imports: [MenuComponent, SearchComponent, IconComponent, AsyncPipe],
  selector: 'app-header',
  styleUrl: './header.component.scss',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly mediaObserverService = inject(MediaObserverService);

  readonly isMobileFormat$ = this.mediaObserverService.isMobileFormat$;
}
