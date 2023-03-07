import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface MyForm {
  quantity: FormControl<number>;
}
@Component({
  selector: 'thd-control-value-accessor',
  templateUrl: './control-value-accessor.component.html',
  styleUrls: ['./control-value-accessor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlValueAccessorComponent {
  public form!: FormGroup<MyForm>;

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  private initForm(): void {
    this.form = this.fb.group<MyForm>({
      quantity: new FormControl<number>(100, { nonNullable: true, validators: Validators.required }),
    });

    this.form.get('quantity')!.valueChanges.subscribe(value => {
      console.log("modal-change, value", value)
      console.log("modal-change, form", this.form)
    })

  }
}
