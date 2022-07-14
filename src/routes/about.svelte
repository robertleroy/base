<script>
  import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { titlecase, mainNav, sidebarOpen } from '$lib/stores/index';
  
  const closeSidebar = () => sidebarOpen.set(false); 
</script>

<aside class="aside" class:sidebarOpen={$sidebarOpen}>
  <nav class="side-nav">
    <h4 class="sidenav-header" on:click={closeSidebar}>
      <a href="{ base }/">Home</a>
    </h4>
    
    {#each $mainNav.routes as {name, url}}
    <div class="sidenav-item" on:click={closeSidebar} 
         class:active={base + url === $page.url.pathname}>
      <a href='{ base }{url}'>{titlecase(name)}</a>
    </div>
    {/each}
  </nav>
</aside>


<div class="page">
  <article class="content">
    <h2>About</h2>

    <hr>

    <ol>
      <li>Demonstration of base styles: &nbsp; 
        <em><a href="{ base }/demo">link</a></em>
      </li>
      <li>Repository for base styles: &nbsp;
        <em><a href="https://github.com/robertleroy/base" target="_blank">link</a></em>
      </li>
    </ol>

  </article>
</div>

<style>
  li a {
    color: #0066cc;
  }
</style>