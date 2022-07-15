<script>
  const tabs = ["Tab One", "Tab Two"];
	let selectedTab = "Tab One";
</script>

## Tabs Example

<br>

<div class='tabs'>
  {#each tabs as tab}
  <div class='tab' 
    on:click={() => selectedTab = tab}
    class:selectedTab={selectedTab === tab}>{tab}</div>
  <div class='spacer'>|</div>
  {/each}
</div>

{#if selectedTab === "Tab One"}
``` bash
# One Fish
```
{:else if selectedTab === "Tab Two"}
``` bash
# Two Fishes
```
{/if }



#### Code

``` html
<script>
  const tabs = ["Tab One", "Tab Two"];
	let selectedTab = "Tab One";
</script>

<div class='tabs'>
  {#each tabs as tab}
  <div class='tab' 
    on:click={() => selectedTab = tab}
    class:selectedTab={selectedTab === tab}>{tab}</div>
  <div class='spacer'>|</div>
  {/each}
</div>


{#if selectedTab === "Tab One"}

    <!-- content here -->

{:else if selectedTab === "Tab Two"}

    <!-- content here -->

{/if }


<style lang='postcss'>
  .tabs {
    display: flex;
    align-items: center;
    gap: 0 1rem;
  }
  .tab {
    position: relative;
    cursor: pointer;
    color: #999;
    align-self: baseline;
  }
  .spacer {
    font-size: var(--h6);
    color: #999;
    &:last-of-type { display: none; }
  }
  .selectedTab {
    font-size: inherit;
    color: currentColor;
    font-weight: bold;
  }
</style>
```

<br>



<style lang='postcss'>
  .tabs {
    display: flex;
    align-items: center;
    gap: 0 1rem;
  }
  .tab {
    position: relative;
    cursor: pointer;
    color: #999;
    align-self: baseline;
  }
  .spacer {
    font-size: var(--h6);
    color: #999;
    &:last-of-type { display: none; }
  }
  .selectedTab {
    font-size: inherit;
    color: currentColor;
    font-weight: bold;
  }
</style>