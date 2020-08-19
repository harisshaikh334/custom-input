import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFormRadioComponent } from './custom-form-radio.component';

describe('CustomFormRadioComponent', () => {
  let component: CustomFormRadioComponent;
  let fixture: ComponentFixture<CustomFormRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomFormRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFormRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
