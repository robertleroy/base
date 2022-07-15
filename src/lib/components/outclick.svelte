<script> 
	/* from https://github.com/babakfp/svelte-outclick */
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()
	let className = ''
	export { className as class }
	export let excludeByDOMNode = []
	export let excludeByQuerySelector = []
	export let useWrapper = false
	export let includeSelf = false
	let wrapper
	const isClickedOnExcluded = eventTarget => {
		let status = false
		for (let i = 0; i < excludeByDOMNode.length; i++) {
			if ( excludeByDOMNode[i] && excludeByDOMNode[i].contains(eventTarget) ) {
				status = true
				break
			}
		}
		for (let i = 0; i < excludeByQuerySelector.length; i++) {
			let el = document.querySelector(excludeByQuerySelector[i])
			if ( el && el.contains(eventTarget) ) {
				status = true
				break
			}
		}
		return status
	}
	const handleClick = event => {
		if (
			(includeSelf ? true : !wrapper.contains(event.target)) &&
			! isClickedOnExcluded(event.target)
		) {
			dispatch('outclick', { wrapper })
		}
	}
	const handleKeydown = event => {
		if (
			event.target !== document.body &&
			['Enter', 'NumpadEnter', 'Space'].includes(event.code)
			) {
			handleClick(event)
		}
	};
</script>

<svelte:window on:pointerdown={handleClick} on:keydown={handleKeydown} />

<div
  on:click
	bind:this={wrapper}
	class="outclick {className}"
	style={!className && !useWrapper ? 'display: contents' : ''}
>
	<slot />
</div>