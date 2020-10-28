import { TestBed } from '@angular/core/testing';

import { SingInUPService } from './sing-in-up.service';

describe('SingInUPService', () => {
  let service: SingInUPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingInUPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
