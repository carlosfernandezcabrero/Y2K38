<script>
  export let label = ''
  export let value = 0
</script>

<div class="flex flex-col items-center box">
  <p class="tracking-tighter text-6xl mb-2">{value}</p>
  <h3 class="text-lg text-center">{label}</h3>
</div>

<style>
  div {
    padding-inline: 15px;
    padding-block: 15px;
  }

  p {
    font-weight: 500;
    color: #000;
  }

  h3 {
    color: #777;
    font-weight: 700;
  }
</style>
