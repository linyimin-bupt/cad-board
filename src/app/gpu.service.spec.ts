import { TestBed } from '@angular/core/testing'

import { FirebaseModule } from './firebase'
import { GpuService } from './gpu.service'

describe('GpuService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      FirebaseModule,
    ]
  }))

  it('should be created', () => {
    const service: GpuService = TestBed.get(GpuService)
    expect(service).toBeTruthy()
  })
})
