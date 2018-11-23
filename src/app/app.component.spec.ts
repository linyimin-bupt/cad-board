import { TestBed, async, fakeAsync } from '@angular/core/testing'
import { HttpClientModule } from '@angular/common/http'

import { GoogleChartsModule } from 'angular-google-charts'

import { FirebaseModule } from './firebase'
import { AppComponent } from './app.component'
import { CadScreenComponent } from './cad-board/cad-board.component'

import { ElModule }           from 'element-angular'

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FirebaseModule,
        GoogleChartsModule,
        HttpClientModule,
        ElModule,
      ],
      declarations: [
        AppComponent,
        CadScreenComponent,
      ],
    }).compileComponents()
  }))

  // TODO: to be fixed
  // it('should create the app', fakeAsync(() => {
  //   const fixture = TestBed.createComponent(AppComponent)
  //   const app = fixture.debugElement.componentInstance
  //   expect(app).toBeTruthy()
  // }))

  // TODO: to be fixed
  // it(`should have as title 'cad-board'`, async (() => {
  //   const fixture = TestBed.createComponent(AppComponent)
  //   const app = fixture.debugElement.componentInstance
  //   expect(app.title).toContain('CAD')
  // }))

  it('should render title in a h1 tag', (() => {
    const fixture = TestBed.createComponent(AppComponent)

    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('h1').textContent).toContain('CAD')
  }))
})
