import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: CheckboxComponent,
    },
  ],
})
export class CheckboxComponent implements ControlValueAccessor {
  readonly label = input<string>();

  readonly value = signal<boolean>(false);

  private onChange!: (value: boolean) => void;
  private onTouch!: () => void;

  onModelChange(value: boolean): void {
    this.value.set(value);
    this.onChange(value);
    this.onTouch();
  }

  writeValue(value: boolean): void {
    this.value.set(value);
  }

  registerOnChange(onChange: (value: boolean) => void): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: () => void): void {
    this.onTouch = onTouched;
  }
}
