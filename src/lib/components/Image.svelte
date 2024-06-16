<script lang="ts">
	export let src = '';
	export let alt = '';
	import { base } from '$app/paths';
</script>

<img src={`${base}${src}`} {alt} />
<p>{alt}</p>

<style>
	img {
		border-radius: 10px;
	}
</style>
