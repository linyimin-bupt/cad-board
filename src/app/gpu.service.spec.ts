import { TestBed } from '@angular/core/testing';

import { GpuService } from './gpu.service';

describe('GpuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GpuService = TestBed.get(GpuService);
    expect(service).toBeTruthy();
  });
});
