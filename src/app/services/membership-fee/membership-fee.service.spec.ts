import { TestBed } from '@angular/core/testing';

import { MembershipFeeService } from './membership-fee.service';

describe('MembershipFeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MembershipFeeService = TestBed.get(MembershipFeeService);
    expect(service).toBeTruthy();
  });
});
