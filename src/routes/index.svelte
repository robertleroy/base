<script>
	import { titlecase, mainNav, sidebarOpen } from '$lib/stores/index';
  import Steps from './steps.md';

  const closeSidebar = () => sidebarOpen.set(false);
</script>

<aside class="aside" class:sidebarOpen={$sidebarOpen}>
  <nav class="side-nav">
    <div class="sidenav-header active" on:click={closeSidebar}>
      <a href="/">Home</a>
    </div>
    
    {#each $mainNav.routes as {name, url}}
    <div class="sidenav-item" on:click={closeSidebar}>
      <a href='{url}'>{titlecase(name)}</a>
    </div>
    {/each}
  </nav>
</aside>

<div class="page">
  <article class="content">
    <h2>Base</h2>
    <hr>

    <Steps />   
  </article>
</div>