import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
}                         from '@angular/core'
import { Subscription }   from 'rxjs'

import {
  GoogleChartComponent,
}                         from 'angular-google-charts'

import {
  GpuService,
}                         from '../gpu.service'

interface GoogleChart {
  title       : string,
  type        : string,
  data        : Array<Array<string | number | {}>>,
  roles       : Array<{ type: string, role: string }>,
  columnNames?: Array<string>,
  options?    : {},
}

@Component({
  selector   : 'app-cad-board',
  templateUrl: './cad-board.component.html',
  styleUrls  : ['./cad-board.component.css']
})
export class CadScreenComponent implements OnInit, OnDestroy {

  charts: Array<GoogleChart> = []

  changingChart = {
    title: 'Machine Learning Status',
    type : 'BarChart',
    data : [
      ['Loading ...', 1],
    ],
    columnNames: ['GPU', '%'],
    options    : {
      animation : {
        duration: 250,
        easing  : 'ease-in-out',
        startup : true
      },
      hAxis: {
        title   : 'GPU Utilization',
        minValue: 0,
        maxValue: 100,
      },
    }
  }

  // @ViewChild('chart')
  // chart: GoogleChartComponent

  subscription: Subscription
  newData   = []
  pos       = 0
  tableData = []
  totalData = {}

  constructor(
    private gpu: GpuService,
  ) { }

  ngOnInit() {
    this.subscription = this.gpu.getGpus().subscribe(data => {
      console.log(data)
      const newData        = []
            this.totalData = data
      console.log(this.totalData)
      for (const [key, value] of Object.entries(data)) {
        console.log('changed:', key, value)
        const numberValue = parseInt(value, 10)
        let   flag        = 0
        for (let i = 0; i < key.length; i++) {
          if (key[i] === 'I' && key[i + 1] === 'P') {
            flag = 1
            delete (data[key])
            if (this.tableData.length < 4) {
              this.tableData.push({ 'key': key, 'value': value })
            }
          }
        }
        if (flag === 0) {
          newData.push([key, numberValue])
        }
      }
      this.newData = newData
    })
    this.repeat()
  }

  ngOnDestroy () {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

  repeat () {
    const timer = setInterval(() => { this.changeChart() }, 10000)
  }

  changeChart () {
    this.changingChart.data = []
    for (let i = this.pos; i < this.pos + 7; i++) {
      if (i >= this.newData.length) {
        break
      } else {
        this.changingChart.data.push(this.newData[i])
      }
    }
    this.pos += 7
    if (this.pos >= this.newData.length) {
      this.pos = 0
    }
  }

}
