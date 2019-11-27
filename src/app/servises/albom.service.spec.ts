import { TestBed } from '@angular/core/testing';

import { AlbomService } from './albom.service';

describe('AlbomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlbomService = TestBed.get(AlbomService);
    expect(service).toBeTruthy();
  });
});
