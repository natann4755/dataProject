import { TestBed } from '@angular/core/testing';

import { PotosService } from './potos.service';

describe('PotosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PotosService = TestBed.get(PotosService);
    expect(service).toBeTruthy();
  });
});
