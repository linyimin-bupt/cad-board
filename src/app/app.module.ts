import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { FirebaseModule } from './firebase/'

import { GoogleChartsModule } from 'angular-google-charts'

import { AppComponent } from './app.component'
import { CadScreenComponent } from './cad-screen/cad-screen.component'

@NgModule({
  declarations: [
    AppComponent,
    CadScreenComponent
  ],
  imports: [
    BrowserModule,
    GoogleChartsModule,
    FirebaseModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
