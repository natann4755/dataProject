import { TestBed } from '@angular/core/testing';

import { LocasenService } from './locasen.service';

describe('LocasenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocasenService = TestBed.get(LocasenService);
    expect(service).toBeTruthy();
  });
});
