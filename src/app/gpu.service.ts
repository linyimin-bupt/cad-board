import { Injectable } from '@angular/core'

import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import {
  AngularFireDatabase,
  AngularFireList,
}                       from 'angularfire2/database'

@Injectable({
  providedIn: 'root'
})
export class GpuService {

  private ref: firebase.firestore.CollectionReference

  gpuList: AngularFireList<any>

  constructor(
    private firebase: AngularFireDatabase,
  ) {
    this.gpuList = this.firebase.list('gpus')
  }

  addGpu() {
    this.gpuList.push({
      test: 100,
    })
  }

  getGpus() {
    return this.gpuList.snapshotChanges()

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
