const ONE_SECOND = 1_000
const ONE_MINUTE = 60 * ONE_SECOND
const ONE_HOUR = 60 * ONE_MINUTE
const ONE_DAY = 24 * ONE_HOUR
const ONE_YEAR = 31_556_952_000
const ONE_MONTH = 2_629_746_000

export function calculateTimeLeft(remaining) {
  const years = Math.floor(remaining / ONE_YEAR)
  const months = Math.floor((remaining % ONE_YEAR) / ONE_MONTH)
  const days = Math.floor((remaining % ONE_MONTH) / ONE_DAY)
  let hours = Math.floor((remaining % ONE_DAY) / ONE_HOUR)
  let minutes = Math.floor((remaining % ONE_HOUR) / ONE_MINUTE)
  let seconds = Math.floor((remaining % ONE_MINUTE) / ONE_SECOND)

  if (hours < 10) hours = `0${hours}`
  if (minutes < 10) minutes = `0${minutes}`
  if (seconds < 10) seconds = `0${seconds}`

  return [years, months, days, hours, minutes, seconds]
}
