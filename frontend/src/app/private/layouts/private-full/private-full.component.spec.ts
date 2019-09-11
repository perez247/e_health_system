import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateFullComponent } from './private-full.component';

describe('PrivateFullComponent', () => {
  let component: PrivateFullComponent;
  let fixture: ComponentFixture<PrivateFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
