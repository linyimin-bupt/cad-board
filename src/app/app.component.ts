import {
  Component,
  OnInit,
}               from '@angular/core'

import {
  VERSION,
}               from '../config'

import {
  environment,
}               from '../environments/environment'

import {
  VersionCheckService,
}                         from './version-check.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title   = 'CAD Monitor & Reportor'
  version = VERSION

  constructor(
    private versionCheckService: VersionCheckService,
  ) {
  }

  ngOnInit() {
    this.versionCheckService.initVersionCheck(environment.versionCheckURL)
  }
}
