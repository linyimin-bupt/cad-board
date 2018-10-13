import { Injectable } from '@angular/core'

import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { AngularFirestore } from '@angular/fire/firestore'

export interface GpuItem {
  [name: string]: string,
}

@Injectable({
  providedIn: 'root'
})
export class GpuService {

  private ref: firebase.firestore.CollectionReference

  gpuList: Observable<GpuItem>

  constructor(
    private db: AngularFirestore,
  ) {
    this.gpuList = db.collection('server').doc<GpuItem>('gpu').valueChanges()
  }

  addGpu () {
    this.db.collection('gpus').add({
      test: 100,
    })
  }

  getGpus () {
    return this.gpuList

    // return new Observable((observer) => {
    //   this.ref.onSnapshot((querySnapshot) => {
    //     const boards = []
    //     querySnapshot.forEach((doc) => {
    //       const data = doc.data()
    //       boards.push({
    //         key: doc.id,
    //         title: data.title,
    //         description: data.description,
    //         author: data.author
    //       })
    //     })
    //     console.log(boards)
    //     observer.next(boards)
    //   })
    // })
  }
}
