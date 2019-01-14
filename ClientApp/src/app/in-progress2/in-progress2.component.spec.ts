import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InProgress2Component } from './in-progress2.component';

describe('InProgress2Component', () => {
  let component: InProgress2Component;
  let fixture: ComponentFixture<InProgress2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InProgress2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InProgress2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
