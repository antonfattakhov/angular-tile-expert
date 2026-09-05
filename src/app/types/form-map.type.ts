import { FormControl } from '@angular/forms';

export type FormMap<T> = {
  [Key in keyof T]: FormControl<T[Key]>;
};
