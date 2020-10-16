import { TestBed } from '@angular/core/testing';

import { SessionizeService } from './sessionize-service.service';

describe('SessionizeServiceService', () => {
  let service: SessionizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
