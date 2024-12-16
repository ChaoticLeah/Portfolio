<script>
	import '../app.css';
	import { Confetti } from "svelte-confetti"
</script>

<slot />
<Confetti />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
