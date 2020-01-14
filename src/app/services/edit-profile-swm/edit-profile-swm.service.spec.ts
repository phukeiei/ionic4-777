import { TestBed } from '@angular/core/testing';

import { EditProfileSwmService } from './edit-profile-swm.service';

describe('EditProfileSwmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditProfileSwmService = TestBed.get(EditProfileSwmService);
    expect(service).toBeTruthy();
  });
});
