import { BrowserModule }      from '@angular/platform-browser'
import { NgModule }           from '@angular/core'
import { HttpClientModule }   from '@angular/common/http'

import { FirebaseModule }     from './firebase/'

import { GoogleChartsModule } from 'angular-google-charts'

import { AppComponent }       from './app.component'
import { CadScreenComponent } from './cad-board/cad-board.component'
// import module
import { ElModule }           from 'element-angular'

@NgModule({
  declarations: [
    AppComponent,
    CadScreenComponent
  ],
  imports: [
    BrowserModule,
    ElModule.forRoot(),
    GoogleChartsModule,
    FirebaseModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
