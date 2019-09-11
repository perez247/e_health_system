import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatePatientComponent } from './private-patient.component';

describe('PrivatePatientComponent', () => {
  let component: PrivatePatientComponent;
  let fixture: ComponentFixture<PrivatePatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivatePatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivatePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
