<script>
	export let fill = 'currentColor';
	export let openMenu = true;
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 24"
		   on:click={() => openMenu = !openMenu} {fill}>
    <rect class="topbar" class:topAnim={!openMenu} 
					ry="1.5" x="0" y="2" height="4" width="28"/>
    <rect class="middleBar" class:middleAnim={!openMenu} 
					ry="1.5" x="0" y="10" height="4" width="28"/>
    <rect class="bottombar" class:bottomAnim={!openMenu} 
					ry="1.5" x="0" y="18" height="4" width="28"/>
</svg>

<style>
	svg { 
		height: 1.5em;
		font-size: 1em;
		cursor: pointer; 
/* 		opacity: 0.8;  */
		vertical-align: middle;
	}	
	svg:hover:not(:active) { opacity: 0.6; }	
	
	.topbar, .bottombar, .middleBar { transition: 0.2s; }
	.topbar { transform-origin: center center; }
	.bottombar { transform-origin: center center; }
	.topAnim { transform: rotate(45deg) translate(0, 8px); }
	.middleAnim { transform: translateX(50%); width: 0; opacity: 0; }
	.bottomAnim { transform: rotate(-45deg) translate(0, -8px); }
</style>