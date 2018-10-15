/**
 * Automagic reload for clients after deploy with Angular 4
 * https://blog.nodeswat.com/automagic-reload-for-clients-after-deploy-with-angular-4-8440c9fdd96c
 */
import { Injectable, NgZone } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { first } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class VersionCheckService {
    // this will be replaced by actual hash post-build.js
    private currentHash = '{{POST_BUILD_ENTERS_HASH_HERE}}'

    constructor(
      private http: HttpClient,
      private ngZone: NgZone,
    ) {}

    /**
     * Checks in every set frequency the version of frontend application
     */
    public initVersionCheck(url, frequency = 1000 * 60) {
      this.ngZone.runOutsideAngular(() => {
        setInterval(() => {
            this.checkVersion(url)
        }, frequency)
      })
    }

    /**
     * Will do the call and check if the hash has changed or not
     */
    private checkVersion(url) {
        // timestamp these requests to invalidate caches
        this.http.get(url + '?t=' + new Date().getTime())
            .pipe(first())
            .subscribe(
                (response: any) => {
                    const hash = response.hash
                    const hashChanged = this.hasHashChanged(this.currentHash, hash)

                    // If new version, do something
                    if (hashChanged) {
                        // ENTER YOUR CODE TO DO SOMETHING UPON VERSION CHANGE
                        location.reload()
                    }
                    // store the new hash so we wouldn't trigger versionChange again
                    // only necessary in case you did not force refresh
                    this.currentHash = hash
                },
                (err) => {
                    console.error(err, 'Could not get version')
                }
            )
    }

    /**
     * Checks if hash has changed.
     * This file has the JS hash, if it is a different one than in the version.json
     * we are dealing with version change

     */
    private hasHashChanged(currentHash, newHash) {
        if (!currentHash || currentHash === '{{POST_BUILD_ENTERS_HASH_HERE}}') {
            return false
        }

        return currentHash !== newHash
    }
}
