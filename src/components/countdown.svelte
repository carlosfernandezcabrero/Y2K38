<script>
  import useTimer from 'hooks/useTimer'
  import DateTile from './date-tile.svelte'

  const ONE_SECOND = 1_000
  const LIMIT = 2 ** 31 * 1000

  const remaining = LIMIT - new Date().getTime()
  const timer = useTimer(remaining, ONE_SECOND)

  let timerValue
  timer.subscribe((value) => (timerValue = value))
</script>

<section class="flex items-center justify-center flex-wrap gap-x-20 gap-y-14">
  <DateTile label="Años" value={timerValue[0]} />
  <DateTile label="Meses" value={timerValue[1]} />
  <DateTile label="Dias" value={timerValue[2]} />
  <DateTile label="Horas" value={timerValue[3]} />
  <DateTile label="Minutos" value={timerValue[4]} />
  <DateTile label="Segundos" value={timerValue[5]} />
</section>
