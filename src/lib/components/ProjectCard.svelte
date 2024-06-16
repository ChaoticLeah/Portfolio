<script lang="ts">
	export let title: string;
	export let desc: string;
	export let image: {
		alt: string;
		name: string;
	};

	export let moreInfoURL: null | string = null;

	export let tags : string [] = []
	import { base } from '$app/paths';

</script>

<div class="card w-96 bg-base-100 shadow-xl image-full group">
	<figure>
		<img
			src="{base}/ProjectThumbnails/{image.name}"
			alt={image.alt}
			class="group-hover:blur transition-all duration-500"
		/>
	</figure>
	<div class="card-body">
		<h2 class="card-title !justify-center">{title}</h2>
		<p class="md:opacity-0 group-hover:opacity-100 transition-all duration-500">
			{desc}
		</p>
		<div
			class="card-actions justify-end md:opacity-0 group-hover:opacity-100 transition-all duration-500"
		>
			{#if moreInfoURL != null}
				<a class="btn btn-primary" href={base + '/' + moreInfoURL} target="_blank">Read More</a>
			{/if}
		</div>
		<div class="card-actions group-hover:opacity-0 transition-all duration-500">
			{#each tags as tag}
				<div class="badge badge-primary">{tag}</div>
			{/each}
		</div>
	</div>
</div>
