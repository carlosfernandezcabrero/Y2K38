<script>
  import { onDestroy } from 'svelte'
  import { calculateTimeLeft } from 'utils/countdown'
  import DateTile from './date-tile.svelte'

  const ONE_SECOND = 1_000
  const LIMIT = 2 ** 31 * 1000

  let remaining = LIMIT - new Date().getTime()
  let timeLeft = calculateTimeLeft(remaining)

  const intervalId = setInterval(() => {
    remaining -= ONE_SECOND
    timeLeft = calculateTimeLeft(remaining)
  }, ONE_SECOND)

  onDestroy(() => clearInterval(intervalId))
</script>

<section class="flex items-center justify-center flex-wrap gap-x-20 gap-y-14">
  <DateTile label="Años" value={timeLeft[0]} />
  <DateTile label="Meses" value={timeLeft[1]} />
  <DateTile label="Dias" value={timeLeft[2]} />
  <DateTile label="Horas" value={timeLeft[3]} />
  <DateTile label="Minutos" value={timeLeft[4]} />
  <DateTile label="Segundos" value={timeLeft[5]} />
</section>
