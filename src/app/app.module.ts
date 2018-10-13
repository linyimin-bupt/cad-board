import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { CadScreenComponent } from './cad-screen/cad-screen.component'
import { GoogleChartsModule } from 'angular-google-charts'

@NgModule({
  declarations: [
    AppComponent,
    CadScreenComponent
  ],
  imports: [
    BrowserModule,
    GoogleChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
