import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, Validator, NG_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'app-custom-form-inputs',
  templateUrl: './custom-form-inputs.component.html',
  styleUrls: ['./custom-form-inputs.component.scss'],
  providers:[
    {provide:NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CustomFormInputsComponent),multi: true},
    {provide: NG_VALIDATORS, useExisting: CustomFormInputsComponent, multi: true}
  ]
})
export class CustomFormInputsComponent implements ControlValueAccessor, Validator {
  value:any = '';
  // name:String = '';
  @Input()name = "";
  @Input()label="Name";
  @Input()placeholder="Enter name";
  @Input()type = "text";
  @Input()cssClass="";
  @Input()pattern:any;
  @Input()onlyNumber:boolean = false;
  constructor() {
   }

   numberOnly(event): boolean {
    if (this.type == 'number' || this.type == 'tel') {
      const charCode = (event.which) ? event.which : event.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
      }
      return true;
    }
    

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
        'required': true
      };
    }
    // else if (this.pattern && this.value) {
    //   console.log('pattern valid ',this.pattern, this.value.match(this.pattern))
    //   return {
    //     'pattern': true
    //   };
    // }
     else {
      return null;
    }
  }
  
}
