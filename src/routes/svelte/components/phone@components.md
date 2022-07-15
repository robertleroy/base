<script>
  import { userData } from '$lib/stores/store';
  import Phone from '$lib/components/phone.svelte';

  let phoneNum;
</script>


## Phone 

<br> 

<Phone bind:phoneNum={$userData.phone}/>   

<br>  <br>  

``` html
<script>
  import { userData } from '$lib/stores/store';
  import Phone from '$lib/components/phone.svelte';

  let phoneNum;
</script>


<Phone bind:phoneNum={$userData.phone}/>
```
