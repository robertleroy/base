<script>
  import Outclick from '$lib/components/outclick.svelte';

  let outclicks = 0;
  let inclicks = 0;
  
  const outclicked = () => outclicks += 1;
  const inclicked = () => inclicks += 1;

  let outtext = "";
  let intext = "";

  const clearClicks = () => {
    outclicks = 0;
    inclicks = 0;

    outtext = '';
    intext = '';
  };
</script>


## OutClick 

<br> 

<div class="row">
  <Outclick on:outclick={outclicked} on:click={inclicked}>
    <button class="grid">
      <input bind:value={intext}/> <br>

      <div class="key">In-Clicks:</div>
      <div class="value">{inclicks}</div>
      
      <div class="key">Out-Clicks:</div>
      <div class="value">{outclicks}</div>
    </button>
  </Outclick> 

  <div class='clearClicks'>
    <input bind:value={outtext}/>
    
    <button class="clear" on:click={clearClicks}>
  Clear Clicks</button>
  </div>
</div>   

<br>

``` html
<script>  
  import Outclick from '$lib/components/outclick.svelte';

  let outclicks = 0;
  let inclicks = 0;

  const outclicked = () => outclicks += 1;
  const inclicked = () => inclicks += 1;
</script>


<Outclick on:outclick={outclicked} on:click={inclicked}>
  <button class="grid">
    <input/> <br>

    <div class="key">In-Clicks:</div>
    <div class="value">{inclicks}</div>
    
    <div class="key">Out-Clicks:</div>
    <div class="value">{outclicks}</div>
  </button>
</Outclick> 
```

<br>

* Takes elements in slot
* Dispatches **outclick** event on **pointerdown** and **keydown** events
* **keydown** event for **enter**, **numpadEnter** & **space** keys only
* **click** event available for parent functions



<style lang='postcss'>
  .clearClicks button {
    display: block;
    margin: 1.2rem auto 0;
  }
  .row {
    display: flex;
    gap: 4rem;
    align-items: baseline;
  }

  .grid {
    display: inline-grid;
    grid-template-columns: max-content max-content;
    justify-items: start;
    gap: 0 1ch;
    user-select: none;

    padding: 1rem;
    border: 1px solid #ccc;
  }  
</style>
