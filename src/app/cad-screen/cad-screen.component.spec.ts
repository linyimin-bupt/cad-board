import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { GoogleChartsModule } from 'angular-google-charts'
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'

import { environment } from '../../environments/environment'

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
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(environment.firebase),
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
