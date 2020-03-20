import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninarepComponent } from './signinarep.component';

describe('SigninarepComponent', () => {
  let component: SigninarepComponent;
  let fixture: ComponentFixture<SigninarepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninarepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninarepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
