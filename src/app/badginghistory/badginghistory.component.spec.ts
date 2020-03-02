import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadginghistoryComponent } from './badginghistory.component';

describe('BadginghistoryComponent', () => {
  let component: BadginghistoryComponent;
  let fixture: ComponentFixture<BadginghistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadginghistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadginghistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
