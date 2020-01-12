import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipFeePage } from './membership-fee.page';

describe('MembershipFeePage', () => {
  let component: MembershipFeePage;
  let fixture: ComponentFixture<MembershipFeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembershipFeePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipFeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
