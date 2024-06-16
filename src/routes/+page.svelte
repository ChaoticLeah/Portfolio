<script lang="ts">
	import Projects from '$lib/Projects.svelte';
	// import { order } from '$lib/projects/order.json';
	// const loading_jsons = import.meta.glob('$lib/projects/*.json');
	// const loading_markdown = import.meta.glob('$lib/projects/*.svelte', {
	// 	query: '?raw',
	// 	import: 'default'
	// });

	// let jsons: any = {};
	// let markdown: any = {};

	// let test = "";
	// (async () => {
	// 	for (const iterator of order) {
	// 		jsons[iterator] = await loading_jsons[`/src/lib/projects/${iterator}`]();
	// 	}

	// 	for (const key in jsons) {
	// 		const el = jsons[key];
	// 		markdown[el.markdownFile] = await loading_markdown[`/src/lib/projects/${el.markdownFile}`]();
	//         test = markdown[el.markdownFile];
	//     }
	// 	console.log(test);
	// })();
</script>

<!-- <h1>Leah</h1>
<p>uhh</p>
test -->
<!-- <div class="hero min-h-screen bg-gradient-to-r from-indigo-950"> -->
<div
	class="hero min-h-screen"
	style="background-image: url(/ProjectThumbnails/DesolateDominion.png);"
>
	<div class="hero-overlay bg-opacity-60"></div>
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl font-bold">Leah</h1>
			<p class="mb-5">
				My name is Leah, and I'm a self driven creative student studying CMGT. In my free time I
				will probably be working on personal projects, drawing, or other creative things. I do a lot
				of opensource work and love making people smile. I love working with people, trying new
				things, and being creative. My Desire to learn enables me to do various different projects.
				I am good at coding, modeling, and texturing among other things.
			</p>
			<a class="btn btn-primary" href="#projects">My Projects</a>
		</div>
	</div>
</div>
<br />

<div id = "projects">
	<Projects></Projects>
</div>
<!-- <article class="prose prose-slate">{{ test }}</article> -->
