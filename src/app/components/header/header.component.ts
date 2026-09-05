import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { SearchComponent } from '../search/search.component';
import { IconComponent } from '../icon/icon.component';

@Component({
  imports: [MenuComponent, SearchComponent, IconComponent],
  selector: 'app-header',
  styleUrl: './header.component.scss',
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
