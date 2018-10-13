/**
 * (cd /home/zixia/git/cad-screen && npm run monitor)
 */
import * as shell from 'shelljs'
import * as firebase from 'firebase'

import { environment } from '../src/environments/environment'

async function updateFirebase(usage: {}): Promise<void> {
  firebase.initializeApp(environment.firebase)

  const firestore = firebase.app().firestore()
  const settings = {/* your settings... */ timestampsInSnapshots: true}
  firestore.settings(settings)

  const doc = firestore.collection('server').doc('gpu')
  await doc.update(usage)
}

async function updateByCurl(usage: {}): Promise<void> {
  const WEB_TASK_URL = 'https://wt-3c52d1a0af632076ec7752be78cc0421-0.sandbox.auth0-extend.com/gpu'

  const paramList = []

  for (const [key, value] of Object.entries(usage)) {
    paramList.push(`--data ${key}=${value}`)
  }

  const param = paramList.join(' ')

  const cmd = `curl -s -k ${param} ${WEB_TASK_URL}`
  const result = shell.exec(cmd)
  console.log(result.stdout)
}

function getGpu(): Array<number> {
  const output = shell.exec('nvidia-smi --format=csv,noheader --query-gpu=utilization.gpu')
  if (output.code !== 0) {
    console.error('fail!')
    return []
  }
  /**
   * 0 %
   * 0 %
   * 2 %
   */
  // console.log(output.stdout)
  const lineList = output.stdout.split('\n')
  // console.log(lineList)
  const percentageList = lineList
                          .map(line => parseInt(line.split(' ')[0], 10))
                          .filter(n => n === n)

  return percentageList
}

function getIp(): number {
  const CMD = 'ip ad li eth0 | grep inet | grep eth0'
  const output = shell.exec(CMD)
  if (output.code !== 0) {
    console.error('fail!')
    return -1
  }

  // inet 111.207.243.71/28 brd 111.207.243.79 scope global eth0
  const RE = /inet\s+\d+\.\d+\.\d+\.(\d+)\/\d+/

  const result = output.stdout.match(RE)
  if (!result[1]) {
    console.error('fail!')
    return -1
  }

  // console.log(result)
  return parseInt(result[1], 10)
}

function getName (): string {
  return shell.exec('hostname -s').stdout.replace(/\n/, '')
}

async function main (): Promise<number> {

  // const ip = getIp()
  const name = getName()
  const gpuUsageList = getGpu()

  const usage = {}

  for (let i = 0; i < gpuUsageList.length; i++) {
    const gpuName = name + '_' + i
    usage[gpuName] = gpuUsageList[i]
    console.log('usage', gpuName, gpuUsageList[i])
  }


  await updateByCurl(usage)

  return 0
}

main()
.then(process.exit)
.catch(e => {
  console.error(e)
  process.exit(1)
})
