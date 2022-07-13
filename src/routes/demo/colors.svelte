<script>
  const link_colors = [
    '--link-color', '--link-hover',
    '--link-active', '--link-visited',
    '--active-color', '--active-dark'
  ];
  
  const surface_colors = [
    '--surface-0', '--surface-1',
    '--surface-2', '--surface-3',
    '--surface-4', '--surface-5',
    '--surface-6', '--surface-7',
    '--surface-8'
  ];

</script>

<h2>Colors</h2>

<hr>

<div class="links grid">
  {#each link_colors as item}
  <div class="grid-item" style:background='var({item})'>
    <span>{item}</span>
  </div>
  {/each}
</div>

<div class="surfaces grid">
  {#each surface_colors as item}
  <div class="grid-item" style:background='var({item})'>
    <span>{item}</span>
  </div>
  {/each}
</div>


<style lang='postcss'>
  .grid {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 2rem;
  }
  .grid-item {
    display: grid;
    place-items: center;
    flex: 25%;
    padding: 2rem 1rem;
    
    box-shadow: inset 0 0 1px 0 var(--surface-8);

    span {
      background: var(--surface-1);
      padding: 0.2rem 0.5rem;
      border-radius: var(--border-radius);
    }
  }
</style>