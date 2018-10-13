import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { GoogleChartsModule } from 'angular-google-charts'

import { FirebaseModule } from '../firebase'

import { CadScreenComponent } from './cad-screen.component'

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
