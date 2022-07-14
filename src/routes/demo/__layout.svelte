<script>
	import { page } from '$app/stores';
	import { titlecase, demoNav, sidebarOpen } from '$lib/stores/index';

  const closeSidebar = () => sidebarOpen.set(false); 
</script>


<aside class="side-bar" class:sidebarOpen={$sidebarOpen} >
  <nav class="side-nav">
    <h4 class="sidenav-header"  on:click={closeSidebar}
      class:active={$demoNav.url === $page.url.pathname}>
      <a href="{$demoNav.url}">{titlecase($demoNav.title)}</a>
    </h4>
    
    {#each $demoNav.routes as {name, url}}
    <div class="sidenav-item" on:click={closeSidebar} 
         class:active={url === $page.url.pathname}>
      <a href='{url}'>{titlecase(name)}</a>
    </div>
    {/each}
  </nav>
</aside>


<section class="page">
  <article class="content">
    <slot />
  </article>
</section>
