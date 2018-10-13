import * as shell from 'shelljs'
import * as firebase from 'firebase'

import { environment } from '../src/environments/environment'

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
  console.log(output.stdout)
  const lineList = output.stdout.split('\n')
  const percentageList = lineList.map(line => parseInt(line.split(' ')[0], 10))

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
  const RE = /^\s+inet\s+\d+\.\d+\.\d+\.\d+\/\d+/

  const result = output.stdout.match(RE)
  if (!result) {
    console.error('fail!')
    return -1
  }

  return parseInt(result[1], 10)
}

async function main (): Promise<number> {
  firebase.initializeApp(environment.firebase)

  const ref = firebase.app().database().ref('gpus')

  const ip = getIp()
  const gpuUsageList = getGpu()

  const usage = {}

  for (let i = 0; i < gpuUsageList.length; i++) {
    const name = ip + '_' + i
    usage[name] = gpuUsageList[i]
  }

  console.log('usage', usage)
  ref.update(usage)

  return 0
}

main()
.then(process.exit)
.catch(e => {
  console.error(e)
  process.exit(1)
})
