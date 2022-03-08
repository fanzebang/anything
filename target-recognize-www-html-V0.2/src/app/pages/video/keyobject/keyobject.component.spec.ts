import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyobjectComponent } from './keyobject.component';

describe('KeyobjectComponent', () => {
  let component: KeyobjectComponent;
  let fixture: ComponentFixture<KeyobjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyobjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyobjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
