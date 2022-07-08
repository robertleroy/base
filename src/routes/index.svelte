<script>
	import { sidebarOpen } from '$lib/stores/store';
  import Steps from './steps.md';

  const closeSidebar = () => sidebarOpen.set(false);
</script>

<aside class="aside" class:sidebarOpen={$sidebarOpen}>
  <nav  class="side-nav">
    side-nav
  </nav>
</aside>

<div class="page">
  <article class="content">
    <h2>Base</h2>
    <hr>

    <Steps />   
  </article>
</div>