import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Target2Component } from './target2.component';

describe('Target2Component', () => {
  let component: Target2Component;
  let fixture: ComponentFixture<Target2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Target2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Target2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
