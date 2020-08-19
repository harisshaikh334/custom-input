import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFormCheckboxComponent } from './custom-form-checkbox.component';

describe('CustomFormCheckboxComponent', () => {
  let component: CustomFormCheckboxComponent;
  let fixture: ComponentFixture<CustomFormCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomFormCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFormCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
