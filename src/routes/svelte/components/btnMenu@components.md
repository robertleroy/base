<script>
  import BtnMenu from '$lib/components/btnMenu.svelte';

  let openMenu = true;
</script>


## BtnMenu  

<br> 

<BtnMenu {openMenu} on:click={() => openMenu = !openMenu} />   

<br>  <br>  

``` html
<script>
  import BtnMenu from '$lib/components/btnMenu.svelte';
  let openMenu = true;
</script>

<BtnMenu {openMenu} on:click={() => openMenu = !openMenu} />
```   
<br>  


- BtnMenu state change on toggle of **openMenu** attribute.  
- **on:click** & **on:pointerdown** events available; 