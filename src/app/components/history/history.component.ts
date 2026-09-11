import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import history from '../../data/history.json';
import { HistoryItem } from '../../interfaces/history-item.interface';

@Component({
  selector: 'app-history',
  styleUrl: './history.component.scss',
  templateUrl: './history.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryComponent {
  readonly itemSelected = output<HistoryItem>();

  readonly historyList = signal<HistoryItem[]>(history);

  onSelect(historyItem: HistoryItem): void {
    this.itemSelected.emit(historyItem);
  }
}
