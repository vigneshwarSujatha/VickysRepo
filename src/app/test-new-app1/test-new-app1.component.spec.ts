import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNewApp1Component } from './test-new-app1.component';

describe('TestNewApp1Component', () => {
  let component: TestNewApp1Component;
  let fixture: ComponentFixture<TestNewApp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNewApp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNewApp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
