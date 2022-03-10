import { TestBed } from '@angular/core/testing';

import { BonnieService } from './bonnie.service';

describe('BonnieService', () => {
  let service: BonnieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BonnieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
