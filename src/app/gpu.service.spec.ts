import { TestBed } from '@angular/core/testing'

import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'

import { environment } from '../environments/environment'

import { GpuService } from './gpu.service'

describe('GpuService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      AngularFireDatabaseModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),
    ]
  }))

  it('should be created', () => {
    const service: GpuService = TestBed.get(GpuService)
    expect(service).toBeTruthy()
  })
})
