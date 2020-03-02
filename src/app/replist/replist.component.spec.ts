import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplistComponent } from './replist.component';

describe('ReplistComponent', () => {
  let component: ReplistComponent;
  let fixture: ComponentFixture<ReplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
