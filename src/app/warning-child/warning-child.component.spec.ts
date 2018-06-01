import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningChildComponent } from './warning-child.component';

describe('WarningChildComponent', () => {
  let component: WarningChildComponent;
  let fixture: ComponentFixture<WarningChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
