import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CInputComponent } from './c-input.component';

describe('CInputComponent', () => {
  let component: CInputComponent;
  let fixture: ComponentFixture<CInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
