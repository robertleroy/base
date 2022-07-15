<script> /* https://svelte.dev/repl/70ff4046c8ac423ea0ecbea3588111c3?version=3.38.3 */
  export let value = 0;
  let previousN = value;

	export let min;
	export let max;
	export let step = 1;
	export let style = "text-align:center;";

  function validator(node, val) {
    return {
      update(val) {
				value = val === null || value < node.min ? previousN : parseFloat(val)
        previousN = value
      }
    }
  }

  let timeout;
	let interval;
	
	const increment = (x) => {
		value = value + (x * step);
		
		timeout = setTimeout(
			function() {
				if (value > max) {
					stoptimer();
					value = max;
					return;
				} else if (value < min) {
					stoptimer();
					value = min;
					return;
				} else {
					interval = setInterval(function() {
					value = value + (x * step);
				}, 70);
			}
		}, 350); 
	}

	function stoptimer() {
		clearTimeout(timeout);
		clearInterval(interval);
		value > max ? value = max : value < min ? value = min : '';
	}
</script>

		
<div class="number">



<input type='number' {min} {max} {step} {style}
  use:validator={value} bind:value>

  <div class="increment minus" on:pointerdown={() => increment(-1)}
		on:pointerup={stoptimer} on:pointerleave={stoptimer} >
		&minus;
	</div>

  <div class="increment plus" on:pointerdown='{() => increment(1)}'
		on:pointerup={stoptimer} on:pointerleave={stoptimer} >
		<span>&plus;</span>
	</div>

</div>






<style>
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
    outline: none;

    font-variant-numeric: tabular-nums;
    border: none;
    width: 100%;
  }

  .number {
    display: inline-flex;
		width: 200px;
		border: 1px solid #ccc;
		border-radius: 0.2rem;
		overflow: hidden;
  }
  .increment {
		display: grid;
		place-items: center center;
		font-size: 1.25em;
		line-height: 1;
		
		width: 2rem;
		cursor: pointer;
		user-select: none;

    border-left: 1px dotted #555;
	}
	/* .plus { border-left: 1px dotted #555; }
	.minus { border-left: 1px dotted #555; } */
	.increment:hover { color: #55555580; }
	.increment:active { color: #55555530; }
  /* input {
    outline: none;
  } */
</style>