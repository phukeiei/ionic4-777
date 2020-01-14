import { TestBed } from '@angular/core/testing';

import { ConfirmRegisterService } from './confirm-register.service';

describe('ConfirmRegisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfirmRegisterService = TestBed.get(ConfirmRegisterService);
    expect(service).toBeTruthy();
  });
});
