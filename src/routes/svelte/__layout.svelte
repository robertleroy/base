<script>
  import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { titlecase, svelteNav, sidebarOpen } from '$lib/stores/index';

  // console.log('url',base + $svelteNav.url);

  const closeSidebar = () => sidebarOpen.set(false); 
</script>


<aside class="side-bar" class:sidebarOpen={$sidebarOpen} >
  <nav class="side-nav">
    <h4 class="sidenav-header"  on:click={closeSidebar}
      class:active={base + $svelteNav.url === $page.url.pathname}>
      <a href="{ base }{$svelteNav.url}">{titlecase($svelteNav.title)}</a>
    </h4>
    
    {#each $svelteNav.routes as {name, url}}
    <div class="sidenav-item" on:click={closeSidebar} 
         class:active={base + url === $page.url.pathname}>
      <a href='{ base }{url}'>{titlecase(name)}</a>
    </div>
    {/each}
  </nav>
</aside>


<section class="page">
  <article class="content">
    <slot />
  </article>
</section>
