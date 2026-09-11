import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-icon',
  styleUrl: './icon.component.scss',
  templateUrl: './icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.--icon-src]': 'getIconSrc()',
    '[style.--icon-color]': 'color()',
  },
})
export class IconComponent {
  readonly name = input.required<string>();
  readonly color = input<string>('white');

  protected getIconSrc(): string {
    return 'url(assets/icons/' + this.name() + '.svg)';
  }
}
