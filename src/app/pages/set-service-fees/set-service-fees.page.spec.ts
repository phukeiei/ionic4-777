import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetServiceFeesPage } from './set-service-fees.page';

describe('SetServiceFeesPage', () => {
  let component: SetServiceFeesPage;
  let fixture: ComponentFixture<SetServiceFeesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetServiceFeesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetServiceFeesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
