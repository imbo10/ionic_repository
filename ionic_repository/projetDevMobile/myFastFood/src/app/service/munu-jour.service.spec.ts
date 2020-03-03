import { TestBed } from '@angular/core/testing';

import { MunuJourService } from './munu-jour.service';

describe('MunuJourService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MunuJourService = TestBed.get(MunuJourService);
    expect(service).toBeTruthy();
  });
});
