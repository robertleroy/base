<script>
  import { base } from '$app/paths';
	import { titlecase, mainNav, sidebarOpen } from '$lib/stores/index';
  // import Steps from './steps.md';

  const links = [
  {
    items: [
      { title: 'Svelte', url: 'https://svelte.dev/docs'},
      { title: 'SvelteKit', url: 'https://kit.svelte.dev/docs/'},
      { title: 'Svelte-Add', url: 'https://github.com/svelte-add/svelte-add'},
      { title: 'Svelte Repl', url: 'https://svelte.dev/repl/'},
    ]
  },
  {
    items: [
      { title: 'Css Selectors', url: 'https://www.w3schools.com/cssref/css_selectors.asp'},
      { title: 'PostCSS', url: 'https://postcss.org/'},
      { title: 'w3schools: How To', url: 'https://www.w3schools.com/howto/default.asp'},
    ]
  },
  {
    items: [
      { title: 'SVGOMG', url: 'https://jakearchibald.github.io/svgomg/'},
      { title: 'Converting Colors', url: 'https://convertingcolors.com/'},
    ]
  },
];

  const closeSidebar = () => sidebarOpen.set(false);
</script>

<aside class="aside" class:sidebarOpen={$sidebarOpen}>
  <nav class="side-nav">
    <div class="sidenav-header active" on:click={closeSidebar}>
      <a href="{ base }/">Home</a>
    </div>
    
    {#each $mainNav.routes as {name, url}}
    <div class="sidenav-item" on:click={closeSidebar}>
      <a href='{ base }{url}'>{titlecase(name)}</a>
    </div>
    {/each}
  </nav>
</aside>

<div class="page">
  <article class="content">
    <h2>Base</h2>
    <hr>

    <div class="list">
      {#each links as section}
      <div class="section">
        {#each section.items as {url,title}}
        <span>
          <a class="link" target="_blank" href={url}>{title}</a>
        </span>
        <div class="spacer">|</div>
        {/each}
      </div>
      {/each}
    </div>

    <!-- <Steps />    -->
  </article>
</div>


<style>
  .section {
    display: flex;
    flex-wrap: wrap;
    gap: 0 1rem;
    align-items: center;
    color: var(--active-color);
    margin-bottom: 0.2rem;
    font-size: var(--h5);
  }
  .spacer, .section a {
    color: var(--active-color);
  }
  .spacer {
    /* height: 8px; */
    line-height: 1;
  }
  .spacer:last-child {
    display: none;
  }
</style>