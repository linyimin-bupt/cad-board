#! /bin/bash

set -e

HOST_NAME=$(hostname -s)
WEB_TASK_URL='https://wt-3c52d1a0af632076ec7752be78cc0421-0.sandbox.auth0-extend.com/gpu'

declare -a percentageList
declare -a gpuNameList

function getGpu() {
  local output="$(nvidia-smi --format=csv,noheader --query-gpu=utilization.gpu | tr -d ' %')"
  local i=0
  for percentage in ${output}
  do
    percentageList[$i]=${percentage}
    let "i += 1"
  done
  for ((i=0; i < ${#percentageList[@]}; i++))
  do
    gpuNameList[$i]="${HOST_NAME}_$i"
  done
}

function updateByCurl() {
  for ((i = 0; i < ${#percentageList[@]}; i++))
  do
    param="${param} --data ${gpuNameList[$i]}=${percentageList[$i]}"
  done
  echo $param
  result=$(curl -s -k ${param} ${WEB_TASK_URL})
  echo result
}

getGpu
updateByCurl


