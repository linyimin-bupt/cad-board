import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
}                         from '@angular/core'
import { Subscription } from 'rxjs'

import {
  GoogleChartComponent,
}                         from 'angular-google-charts'

import {
  GpuService,
}               from '../gpu.service'

interface GoogleChart {
  title       : string,
  type        : string,
  data        : Array<Array<string | number | {}>>,
  roles       : Array<{type: string, role: string}>,
  columnNames?: Array<string>,
  options?    : {},
}

@Component({
  selector   : 'app-cad-screen',
  templateUrl: './cad-screen.component.html',
  styleUrls  : ['./cad-screen.component.css']
})
export class CadScreenComponent implements OnInit, OnDestroy {

  charts: Array<GoogleChart> = []

  changingChart = {
    title: 'GPU Usage',
    type: 'BarChart',
    data: [
      ['Loading ...', 1],
    ],
    columnNames: ['GPU', '%'],
    options: {
      animation: {
        duration: 250,
        easing: 'ease-in-out',
        startup: true
      }
    }
  }

  // @ViewChild('chart')
  // chart: GoogleChartComponent

  subscription: Subscription

  constructor(
    private gpu: GpuService,
  ) { }

  ngOnInit() {
    this.subscription = this.gpu.getGpus().subscribe(data => {
      const newData = []
      for (const [key, value] of Object.entries(data)) {
        console.log('changed:', key, value)
        const numberValue = parseInt(value, 10)
        newData.push([key, numberValue])
      }

      console.log(newData)
      this.changingChart.data = newData
    })
  }

  ngOnDestroy () {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

  changeChart() {
    this.changingChart.data = [
      ['Copper', Math.random() * 20.0],
      ['Silver', Math.random() * 20.0],
      ['Gold', Math.random() * 20.0],
      ['Platinum', Math.random() * 20.0],
    ]
  }

}
