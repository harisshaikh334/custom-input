import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, Validator, NG_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'app-custom-form-checkbox',
  templateUrl: './custom-form-checkbox.component.html',
  styleUrls: ['./custom-form-checkbox.component.scss'],
  providers:[
    {provide:NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CustomFormCheckboxComponent),multi: true},
    {provide: NG_VALIDATORS, useExisting: CustomFormCheckboxComponent, multi: true}
  ]
})
export class CustomFormCheckboxComponent implements ControlValueAccessor, Validator {
  @Input()dataList = [];
  @Input()name = '';
  @Input()label = 'Select';
  constructor() { }

  handleChange(e) {
    console.log('event target ', e);
    // this.inputModelChange.emit(this.dataList);
  }
  onChange:(value: string) => void;

  registerOnChange(onChange: (value:string) => void) {
    this.onChange = onChange;
  }

  registerOnTouched() {

  }
  writeValue(value: any) {
    
    this.dataList =value;
  }
  validate() {
      if (!this.dataList) {
        return {
          'required': true
        };
      }
      let data = this.dataList.filter(item => item.check);
      console.log('data is ', data);
      if (data.length ==0 ) {
        return {
          'required': true
        };
      } else {
        return null;
      }
      
    } 

}
