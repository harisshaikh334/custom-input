import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { CInputComponent } from './c-input/c-input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'custom-inputs';
  value = '';
  phone_no= '';
  selValue = '';
  dataList = [
    {
      text:1,
      value:1
    },
    {
      text:2,
      value:2
    },
    {
      text:3,
      value:3
    },
    {
      text:4,
      value:4
    }
  ];
  skillsList = [
    {
      text: 'Angular',
      value: 'Angular',
      check: true
    },
    {
      text: 'HTML',
      value: 'HTML',
      check: false
    },
    {
      text: 'CSS',
      value: 'CSS',
      check: false
    },
    {
      text: 'Javascript',
      value: 'Javascript',
      check: false
    }
  ]
  genderList = [
    {
      text:'Male',
      value:'male'
    },
    {
      text:'Female',
      value:'female'
    }
  ];
  gender = '';
  genderSel = 'male';
  userForm:FormGroup;
  emplForm:FormGroup;
  @ViewChild('ename')ename: CInputComponent;
  @ViewChild('form')form:any;
  name:String = '';
  constructor (public fb: FormBuilder) {
    
    // this.userForm = fb.group({
    //   name: [this.value, Validators.required],
    //   mobile: [this.phone_no,Validators.required],
    //   gender: [this.gender, Validators.required],
    //   skills:[],
    // });

    this.emplForm = fb.group({
      name: ['', Validators.required],
      sel: [''],
      gender: [''],
      skills:[]
    });
    setInterval(() => {
      console.log('interval form ', this.emplForm);
    }, 5000);
  }
  changeVal(e) {
  }
  handleChange(e) {
    
  }
  onFormSubmit () {
    
  }
}
