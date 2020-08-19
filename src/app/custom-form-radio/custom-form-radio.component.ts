import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, Validator, NG_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'app-custom-form-radio',
  templateUrl: './custom-form-radio.component.html',
  styleUrls: ['./custom-form-radio.component.scss'],
  providers:[
    {provide:NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CustomFormRadioComponent),multi: true},
    {provide: NG_VALIDATORS, useExisting: CustomFormRadioComponent, multi: true}
  ]
})
export class CustomFormRadioComponent implements ControlValueAccessor, Validator {
  @Input()dataList = [];
  @Input()label:any;
  @Input()name:any;
  @Input()value:any;
  @Input()cssClass="";
  constructor() { }
  writeValue(value: string) {
    this.value = value;
  }
  handleChange($event) {
    this.onChange($event);
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
