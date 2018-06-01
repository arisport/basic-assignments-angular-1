import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessChildComponent } from './success-child.component';

describe('SuccessChildComponent', () => {
  let component: SuccessChildComponent;
  let fixture: ComponentFixture<SuccessChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
