import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Detect2Component } from './detect2.component';

describe('Detect2Component', () => {
  let component: Detect2Component;
  let fixture: ComponentFixture<Detect2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Detect2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Detect2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
