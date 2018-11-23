import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientModule } from '@angular/common/http'

import { GoogleChartsModule } from 'angular-google-charts'

import { FirebaseModule }       from '../firebase'
import { VersionCheckService }  from '../version-check.service'

import { CadScreenComponent } from './cad-board.component'
import { ElModule }           from 'element-angular'

describe('CadScreenComponent', () => {
  let component: CadScreenComponent
  let fixture: ComponentFixture<CadScreenComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CadScreenComponent,
      ],
      imports: [
        FirebaseModule,
        GoogleChartsModule,
        HttpClientModule,
        ElModule,
      ],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CadScreenComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
