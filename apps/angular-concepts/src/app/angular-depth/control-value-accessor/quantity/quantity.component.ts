import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'thd-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: QuantityComponent,
    },
  ],
})
export class QuantityComponent implements ControlValueAccessor {
  value!: number;
  disabled = false;

  // private valueChanges = new Subject<number>();
  // private touches = new Subject();
  private onChange!: (value: number) => void;
  private onTouch!: () => void;

  registerOnChange(fn: any) {
    // this.valueChanges.subscribe(fn);
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    // this.touches.subscribe(fn);
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  writeValue(value: number) {
    this.value = value;
  }

  updateValue(value: number) {
    //update value to formcontrol. So the formcontrol/ngModel which is used will be get the new value
    this.value = value;
    // this.valueChanges.next(value);
    this.onChange(value);
  }

  touch() {
    //update value to formcontrol. So the formcontrol/ngModel which is used will be get the status touch = true (view detail in usage control-value-accessor component)
    console.log('touch: blur-call');
    this.onTouch();
    // this.touches.next();
  }
}
