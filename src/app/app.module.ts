import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'

import { GoogleChartsModule } from 'angular-google-charts'

import { environment } from '../environments/environment'

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
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
