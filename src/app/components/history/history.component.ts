import { Component, signal } from '@angular/core';
import history from '../../data/history.json';
import { HistoryItem } from '../../interfaces/history-item.interface';

@Component({
  selector: 'app-history',
  styleUrl: './history.component.scss',
  templateUrl: './history.component.html',
})
export class HistoryComponent {
  readonly historyList = signal<HistoryItem[]>(history);
}
