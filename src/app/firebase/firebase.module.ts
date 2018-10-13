import { NgModule } from '@angular/core'
import {
  AngularFireModule,
}                           from '@angular/fire'
import {
  AngularFirestoreModule,
}                           from '@angular/fire/firestore'

import { environment } from '../../environments/environment'

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ]
})


export class FirebaseModule { }
