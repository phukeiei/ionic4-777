import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUserPage } from './manage-user.page';

describe('ManageUserPage', () => {
  let component: ManageUserPage;
  let fixture: ComponentFixture<ManageUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageUserPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
