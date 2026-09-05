import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormMap } from '../../types/form-map.type';
import { Filters } from '../../interfaces/filters.interface';

@Component({
  selector: 'app-filters',
  styleUrl: './filters.component.scss',
  templateUrl: './filters.component.html',
  imports: [ReactiveFormsModule],
})
export class FiltersComponent {
  readonly form = new FormGroup<FormMap<Filters>>({
    author: new FormControl<string | null>(null),
    member: new FormControl<boolean>(false, { nonNullable: true }),
    strictSearch: new FormControl<boolean>(false, { nonNullable: true }),
    headers: new FormControl<boolean>(false, { nonNullable: true }),
    tags: new FormControl<boolean>(false, { nonNullable: true }),
    questions: new FormControl<boolean>(false, { nonNullable: true }),
    contacts: new FormControl<boolean>(false, { nonNullable: true }),
  });
}
