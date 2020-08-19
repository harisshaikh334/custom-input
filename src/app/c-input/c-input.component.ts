import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-c-input',
  templateUrl: './c-input.component.html',
  styleUrls: ['./c-input.component.scss']

})
export class CInputComponent implements OnInit {

  constructor() { }
  @Input()type = "text";
  @Input()name = "textname";
  @Input()inputValue = "";
  @Input()cssClass="";
  @Input()dataList = [];
  @Input()label = '';
  @Input()parentForm:FormGroup;
  @Input()required:boolean = false;
  @Output() inputModelChange = new EventEmitter<any>();

  ngOnInit(): void {
  }
  handleChange () {
    if (this.type == 'checkbox') {
      this.inputModelChange.emit(this.dataList);
    } else {
      this.inputModelChange.emit(this.inputValue);
    }
  }
  

}
