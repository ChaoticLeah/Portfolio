<script lang="ts">
	export let name: string;
	export let level: number;

</script>

<!-- <div class="flex flex-wrap gap-2 items-center">
    <h3 class="pr-5">{name}</h3>
    <progress class="progress progress-success w-56 ml-auto" value={level} max="100"></progress>
</div> -->

<button class="collapse bg-base-200 group">
	<div class="collapse-title flex flex-wrap gap-2 items-center">
		<h3 class="pr-5 group-hover:underline">{name}</h3>
		<progress class="progress progress-success w-56 ml-auto" value={level} max="100"></progress>
	</div>
	<div class="collapse-content">
		<slot/>
	</div>
</button>
