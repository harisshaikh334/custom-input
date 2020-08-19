import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CInputComponent } from './c-input/c-input.component';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CustomFormInputsComponent } from './custom-form-inputs/custom-form-inputs.component';
import { CustomFormSelectComponent } from './custom-form-select/custom-form-select.component';
import { CustomFormRadioComponent } from './custom-form-radio/custom-form-radio.component';
import { CustomFormCheckboxComponent } from './custom-form-checkbox/custom-form-checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    CInputComponent,
    CustomFormInputsComponent,
    CustomFormSelectComponent,
    CustomFormRadioComponent,
    CustomFormCheckboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
