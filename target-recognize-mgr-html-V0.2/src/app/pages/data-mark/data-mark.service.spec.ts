import { TestBed } from '@angular/core/testing';

import { DataMarkService } from './data-mark.service';

describe('DataMarkService', () => {
  let service: DataMarkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataMarkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
