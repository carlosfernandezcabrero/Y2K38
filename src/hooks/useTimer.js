import { onDestroy } from 'svelte'
import { writable } from 'svelte/store'
import { calculateTimeLeft } from 'utils/countdown'

export default function useTimer(initialTime, delay) {
  const timeLeft = writable(calculateTimeLeft(initialTime))

  const intervalId = setInterval(() => {
    initialTime -= delay
    const time = calculateTimeLeft(initialTime)
    timeLeft.set(time)
  }, delay)

  onDestroy(() => clearInterval(intervalId))

  return timeLeft
}
