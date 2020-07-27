import { TestBed } from '@angular/core/testing';

import { ApimaranduService } from './apimarandu.service';

describe('ApimaranduService', () => {
  let service: ApimaranduService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApimaranduService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
