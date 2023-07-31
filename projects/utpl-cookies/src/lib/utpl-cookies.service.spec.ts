import { TestBed } from '@angular/core/testing';

import { UtplCookiesService } from './utpl-cookies.service';

describe('UtplCookiesService', () => {
  let service: UtplCookiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtplCookiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
