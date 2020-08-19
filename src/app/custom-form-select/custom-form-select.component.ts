import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, Validator, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'app-custom-form-select',
  templateUrl: './custom-form-select.component.html',
  styleUrls: ['./custom-form-select.component.scss'],
  providers: [
    {provide:NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CustomFormSelectComponent),multi: true},
    {provide: NG_VALIDATORS, useExisting: CustomFormSelectComponent, multi: true}
  ]
})
export class CustomFormSelectComponent implements ControlValueAccessor, Validator {
  @Input()name = '';
  @Input()cssClass = '';
  @Input()value = '';
  @Input()dataList = [];
  @Input()label = 'Select';
  constructor() { 

  }
  writeValue(value: string) {
    this.value = value;
  }
  handleChange($event) {
    this.onChange($event.target.value);
  }

  onChange:(value: string) => void;

  registerOnChange(onChange: (value:string) => void) {
    this.onChange = onChange;
  }

  registerOnTouched() {

  }
  validate() {
    if (!this.value) {
      return {
        'required': 'Please enter name'
      };
    }
  }
  

  
}
