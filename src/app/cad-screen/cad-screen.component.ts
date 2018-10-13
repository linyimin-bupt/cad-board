import {
  Component,
  OnInit,
  ViewChild,
}                         from '@angular/core'

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
export class CadScreenComponent implements OnInit {

  charts: Array<GoogleChart> = []

  changingChart = {
    title: 'GPU Usage',
    type: 'BarChart',
    data: [
      ['GPU', 0],
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

  @ViewChild('chart')
  chart: GoogleChartComponent

  displayedColumns = ['title', 'description', 'author']
  // dataSource = new BoardDataSource(this.gpu)

  constructor(
    private gpu: GpuService,
  ) { }

  ngOnInit() {
    this.gpu.getGpus().subscribe(list => {
      const newGpuDict = {}

      this.changingChart.data = list.map(item => [
        item.payload.key,
        item.payload.val(),
      ])

    })
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
