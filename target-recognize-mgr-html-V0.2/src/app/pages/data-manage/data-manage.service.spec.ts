import { TestBed } from '@angular/core/testing';

import { DataManageService } from './data-manage.service';

describe('DataManageService', () => {
  let service: DataManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
