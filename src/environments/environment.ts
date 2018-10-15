// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  versionCheckURL: 'https://cad-screen.surge.sh/version.json',
  firebase: {
    apiKey           : 'AIzaSyC7rffsqf4BEpJIO8lt6eG1lfk9X59_sK8',
    authDomain       : 'cad-screen.firebaseapp.com',
    databaseURL      : 'https://cad-screen.firebaseio.com',
    projectId        : 'cad-screen',
    storageBucket    : 'cad-screen.appspot.com',
    messagingSenderId: '177830811901',
  }
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
