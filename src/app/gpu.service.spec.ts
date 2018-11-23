import { TestBed } from '@angular/core/testing'

import { FirebaseModule } from './firebase'
import { GpuService } from './gpu.service'
import { ElModule }           from 'element-angular'
describe('GpuService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      FirebaseModule,
      ElModule,
    ]
  }))

  it('should be created', () => {
    const service: GpuService = TestBed.get(GpuService)
    expect(service).toBeTruthy()
  })
})
