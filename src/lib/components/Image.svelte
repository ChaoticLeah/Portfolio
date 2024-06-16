<script lang="ts">
	export let src = '';
	export let alt = '';
	const dev = process.argv.includes('dev');
</script>

<img src={`${dev ? '' : '/Uni-Portfolio/'}${src}`} {alt} />
<p>{alt}</p>

<style>
	img {
		border-radius: 10px;
	}
</style>
