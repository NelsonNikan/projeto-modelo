import { Component, Input, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() inputValue: string = '';
  @Input() placeholder: string = '';
  @Output() value = new EventEmitter();
  public form: FormGroup ;


  
  constructor(
    private fb: FormBuilder
  ){
    this.form = this.fb.group({
      nome: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ])
    })
  }


  get nomeDigitado(): any{
    console.log('exempo ', this.form.value)
    this.value.emit(this.form.invalid)
    return this.form.invalid;
  }

}
