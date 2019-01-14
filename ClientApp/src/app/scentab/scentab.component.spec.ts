import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScentabComponent } from './scentab.component';

describe('ScentabComponent', () => {
  let component: ScentabComponent;
  let fixture: ComponentFixture<ScentabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScentabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScentabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
