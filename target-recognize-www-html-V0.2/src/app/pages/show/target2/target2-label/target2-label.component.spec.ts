import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Target2LabelComponent } from './target2-label.component';

describe('Target2LabelComponent', () => {
  let component: Target2LabelComponent;
  let fixture: ComponentFixture<Target2LabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Target2LabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Target2LabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
