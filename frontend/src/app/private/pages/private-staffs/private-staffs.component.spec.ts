import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateStaffsComponent } from './private-staffs.component';

describe('PrivateStaffsComponent', () => {
  let component: PrivateStaffsComponent;
  let fixture: ComponentFixture<PrivateStaffsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateStaffsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateStaffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
