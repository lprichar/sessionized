import { TestBed } from '@angular/core/testing';

import { WatchNowService } from './watch-now.service';

describe('WatchNowService', () => {
  let service: WatchNowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WatchNowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
