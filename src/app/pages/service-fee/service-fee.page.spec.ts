import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceFeePage } from './service-fee.page';

describe('ServiceFeePage', () => {
  let component: ServiceFeePage;
  let fixture: ComponentFixture<ServiceFeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceFeePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceFeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
