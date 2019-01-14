import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scentab2Component } from './scentab2.component';

describe('Scentab2Component', () => {
  let component: Scentab2Component;
  let fixture: ComponentFixture<Scentab2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scentab2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scentab2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
