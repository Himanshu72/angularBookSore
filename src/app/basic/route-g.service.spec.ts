import { TestBed } from '@angular/core/testing';

import { RouteGService } from './route-g.service';

describe('RouteGService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteGService = TestBed.get(RouteGService);
    expect(service).toBeTruthy();
  });
});
