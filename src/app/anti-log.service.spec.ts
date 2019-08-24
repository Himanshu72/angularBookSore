import { TestBed } from '@angular/core/testing';

import { AntiLogService } from './anti-log.service';

describe('AntiLogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AntiLogService = TestBed.get(AntiLogService);
    expect(service).toBeTruthy();
  });
});
