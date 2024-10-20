<script lang="ts">
    import { onMount } from 'svelte';

	let constrain = 20;
	let mouseOverContainer: HTMLElement | null = null;
	let ex1Layer: HTMLElement | null = null;

	function transforms(x: number, y: number, el: HTMLElement) {
		let box = el.getBoundingClientRect();
		let calcX = -(y - box.y - box.height / 2) / constrain;
		let calcY = (x - box.x - box.width / 2) / constrain;

		return `perspective(100px) rotateX(${calcX}deg) rotateY(${calcY}deg)`;
	}

	function transformElement(el: HTMLElement, xyEl: [number, number, HTMLElement]) {
		el.style.transform = transforms(xyEl[0], xyEl[1], xyEl[2]);
	}

	onMount(() => {
		if (mouseOverContainer && ex1Layer) {
			mouseOverContainer.onmousemove = function (e: MouseEvent) {
				let xy = [e.clientX, e.clientY];
				let position = [...xy, ex1Layer];

				window.requestAnimationFrame(() => {
					if (ex1Layer) {
						transformElement(ex1Layer, position as [number, number, HTMLElement]);
					}
				});
			};
		}
	});
</script>

<div bind:this={mouseOverContainer} class="container">
	<div bind:this={ex1Layer} class="box">
        <slot></slot>
    </div>
</div>

<style>
	.container {
		/* height: 100vh;
		width: 100vw; */
		display: flex;
		align-items: center;
		justify-content: center;
	}
	/* .box {
		border: 2px solid red;
		height: 100px;
		width: 100px;
		position: absolute;
	} */
</style>
