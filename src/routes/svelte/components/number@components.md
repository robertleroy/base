<script>
  import { userData } from '$lib/stores/store';
  import Number from '$lib/components/number.svelte';
</script>


## Number 

<br> 

<Number min={$userData.min} 
        max={$userData.max} 
        step={$userData.step} 
        bind:value={$userData.count} />  
<br><br>
<div>min: {$userData.min}, max: {$userData.max}, step: {$userData.step}, value: {$userData.count},</div>

<br>  

``` html
<script>
  import { userData } from '$lib/stores/store';
  import Number from '$lib/components/number.svelte';
</script>

<Number min={$userData.min} 
        max={$userData.max} 
        step={$userData.step} 
        bind:value={$userData.count} />
```

<br>

* Accepts numeric input.
* Spinners 
  * increment on click
  * spin on pointerdown
  * stop on pointer up
* Takes values for **style**, **min**, **max**, **step** & **value** attributes.
  * may pass **min/max** while spinning, will resolve within range.