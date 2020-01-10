import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryAdminPage } from './history-admin.page';

describe('HistoryAdminPage', () => {
  let component: HistoryAdminPage;
  let fixture: ComponentFixture<HistoryAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryAdminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
