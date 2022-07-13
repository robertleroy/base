<script>
  export let min = 0;
  export let max = 100;
  export let step = 1;
  export let value = 50;
</script>

<input class="js" type='range' 
			 {min} {max} {step} bind:value={value}
			 style="--min: {min};
						 --max: {max};
						 --val: {value}" >

<style>
	input[type='range'] {
		--track-width: auto;
		--track-height: 0.3875em;
		--track-light: #e9e9ed;
		--track-dark: #c8c8cf;
		--track-border: 1px solid #afafb9;
		--track-radius: 0.2rem;
		--track-shadow: 0 1px 0.5px 0 #67677480;
		
		--webkit-thumb-offset: -0.5em;
		--thumb-width: 1.25em;
		--thumb-height: 1.25em;
		--thumb-light: #676774;
		--thumb-dark: #484851;
		--thumb-border: 2px solid #fff;
		--thumb-radius: 50%;
		--thumb-shadow: 0 1px 3px -0.5px rgba(0,0,0,0.8);
	
		--progress-height: var(--track-height);
		--progress-light: #0060df;
		--progress-dark: #0250bb;
		--progress-border: var(--track-border);
		--progress-border: none;
		--progress-radius: var(--track-radius);
		
		--range: calc(var(--max) - var(--min));
		--ratio: calc((var(--val) - var(--min))/var(--range));
		--sx: calc(.5*1.5em + var(--ratio)*(100% - 1.5em));

		margin: 0;
		padding: 0;
		width: auto;
		height: 1.5em;
		background: transparent;
		font: 1em/1 arial, sans-serif;
		border: none;
	}

	
	[type=range], [type=range]::-webkit-slider-thumb {
		-webkit-appearance: none;
	}
	
	/* 	webkit */
	[type=range]::-webkit-slider-runnable-track {
		box-sizing: border-box;
		width: var(--track-width);
		height: var(--track-height);
		background: var(--track-light);
		border: var(--track-border);
		border-radius: var(--track-radius);
		box-shadow: var(--track-shadow);
	}
	[type=range]:hover::-webkit-range-track {
  	background: var(--track-dark);
	}
	.js[type=range]::-webkit-slider-runnable-track {
		background: linear-gradient(var(--progress-light), var(--progress-light)) 0/var(--sx) 100% no-repeat var(--track-light);
	}
	.js[type=range]:hover::-webkit-slider-runnable-track {
		background: linear-gradient(var(--progress-dark), var(--progress-dark)) 0/var(--sx) 100% no-repeat var(--track-dark);
	}
	[type=range]::-webkit-slider-thumb {
		margin-top: var(--webkit-thumb-offset);
		box-sizing: border-box;
		width: var(--thumb-width);
		height: var(--thumb-height);
		background: var(--thumb-light);
		border: var(--thumb-border);
		border-radius: var(--thumb-radius);
		box-shadow: var(--thumb-shadow);
	}
	[type=range]:hover::-webkit-range-thumb {
  	background: var(--thumb-dark);
	}
	[type=range]:active::-webkit-range-thumb {
  	background: var(--progress-light);
	}
	
	/* 	moz */
	[type=range]::-moz-range-track {
		box-sizing: border-box;
		width: var(--track-width);
		height: var(--track-height);
		background: var(--track-light);
		border: var(--track-border);
		border-radius: var(--track-radius);
		box-shadow: var(--track-shadow);
	}
	[type=range]:hover::-moz-range-track {
  	background: var(--track-dark);
	}
	[type=range]::-moz-range-progress {
		width: var(--progress-width);
		height: var(--progress-height);
		background: var(--progress-light);
		border: var(--progress-border);
		border-radius: var(--progress-radius);
	}
	[type=range]:hover::-moz-range-progress {
  	background: var(--progress-dark);
	}
	[type=range]::-moz-range-thumb {
		box-sizing: border-box;
		width: var(--thumb-width);
		height: var(--thumb-height);
		background: var(--thumb-light);
		border: var(--thumb-border);
		border-radius: var(--thumb-radius);
		box-shadow: var(--thumb-shadow);
	}
	[type=range]:hover::-moz-range-thumb {
  	background: var(--thumb-dark);
	}
	[type=range]:active::-moz-range-thumb {
  	background: var(--progress-light);
	}
</style>