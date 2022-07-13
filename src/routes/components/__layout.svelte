<script>
	import { page } from '$app/stores';
  import { base } from '$app/paths';
	import { titlecase, componentsNav, sidebarOpen } from '$lib/stores/index';

  const closeSidebar = () => sidebarOpen.set(false); 
</script>


<aside class="side-bar" class:sidebarOpen={$sidebarOpen} >
  <nav class="side-nav">
    <h4 class="sidenav-header"  on:click={closeSidebar}
      class:active={$componentsNav.url === $page.url.pathname}>
      <a href="{base}{$componentsNav.url}">{titlecase($componentsNav.title)}</a>
    </h4>
    
    {#each $componentsNav.routes as {name, url}}
    <div class="sidenav-item" on:click={closeSidebar} 
         class:active={url === $page.url.pathname}>
      <a href='{base}{url}'>{titlecase(name)}</a>
    </div>
    {/each}
  </nav>
</aside>


<section class="page">
  <article class="content">
    <slot />
  </article>
</section>
