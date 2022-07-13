<script>
  // import { page } from '$app/stores';
	// import { quintOut } from 'svelte/easing';
  import { fade } from "svelte/transition";
  export let url;
</script>

{#key url}
	<div
		in:fade={{ duration: 250, delay: 300 }}
		out:fade={{ duration: 250 }}
	>
		<slot />
	</div>
{/key}