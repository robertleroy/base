<script>
  import Range from '$lib/components/range.svelte';

  
  let value = 7;
  let min = 0;
  let max = 10;
  let step = 1;
</script>



<h2 >
  Components
</h2>

<hr>

<div class="range">
  <h3>Range</h3>
  <Range {min} {max} {step} bind:value />
  
  <div class="values">
    <div class="key">Min:</div>
    <div class="value">{min}</div>
    <div class="key">Max:</div>
    <div class="value">{max}</div>
    <div class="key">Step:</div>
    <div class="value">{step}</div>
    <div class="key">Value:</div>
    <div class="value">{value}</div>
  </div>
</div>



<hr>


<style lang='postcss'>

  .range .values {
    display: grid;
    grid-template-columns: min-content auto;
    gap: 0 2ch;
  }
</style>