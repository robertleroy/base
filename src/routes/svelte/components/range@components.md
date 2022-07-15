<script>
  import { userData } from '$lib/stores/store';
  import Range from '$lib/components/range.svelte';
</script>


## Range 

<br> 

<Range min={$userData.min} 
      max={$userData.max} 
      step={$userData.step} 
      bind:value={$userData.count} />

<br><br>
<div>min: {$userData.min}, max: {$userData.max}, step: {$userData.step}, value: {$userData.count},</div>

<br>  

``` html
<script>
  import { userData } from '$lib/stores/store';
  import Range from '$lib/components/range.svelte';
</script>

<Range min={$userData.min} 
      max={$userData.max} 
      step={$userData.step} 
      bind:value={$userData.count} />
```

<br>

* Range is fully customizable via css variables
* Takes values for **min**, **max**, **step** & **value** attributes
