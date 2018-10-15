import { Injectable, Injector, NgZone } from '@angular/core'

import { Observable, Subject } from 'rxjs'
import { map } from 'rxjs/operators'

import {
  AngularFirestore,
}                     from './firebase'

export interface GpuItem {
  [name: string]: string,
}

@Injectable({
  providedIn: 'root'
})
export class GpuService {

  private ref: firebase.firestore.CollectionReference

  gpuList: Subject<GpuItem>
  db: AngularFirestore

  constructor(
    private injector: Injector,
    private ngZone  : NgZone,
  ) {
    this.gpuList = new Subject<GpuItem>()

    ngZone.runOutsideAngular(() => {
      this.db = injector.get(AngularFirestore)
      this.db.collection('server').doc<GpuItem>('gpu').valueChanges().subscribe(i => {
        this.ngZone.run(() => {
          this.gpuList.next(i)
        })
      })
    })

  }

  addGpu () {
    this.db.collection('gpus').add({
      test: 100,
    })
  }

  getGpus () {
    return this.gpuList
  }
}
