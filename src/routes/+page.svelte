<script lang="ts">
	import Projects from '$lib/Projects.svelte';
	import Icon from '@iconify/svelte';
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
	import { base } from '$app/paths';
	import Skill from '$lib/components/Skill.svelte';
</script>

<svelte:head>
	<title>Leah's Portfolio</title>
</svelte:head>

<!-- <h1>Leah</h1>
<p>uhh</p>
test -->
<!-- <div class="hero min-h-screen bg-gradient-to-r from-indigo-950"> -->
<div
	class="hero min-h-screen"
	style="background-image: url({base}/ProjectThumbnails/DesolateDominion.png);"
>
	<div class="hero-overlay bg-opacity-60"></div>
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md">
			<h1 class="mb-5 text-8xl font-bold drop-shadow-2xl animate-fadeIn">Leah</h1>
			<p class="mb-5 text-xl drop-shadow-2xl animate-wiggle">
				/* <b class="text-primary">Programmer</b>, <b class="text-secondary">Artist</b>,
				<b class="text-accent">Designer</b> */
			</p>
			<!-- <a class="btn btn-primary" href="#projects">My Projects</a> -->

				<div class="relative inline-flex  group">
					<div
						class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
					</div>
					<a href="#projects" title="See my projects"
						class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-accent-content transition-all duration-200 glass font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary "
						role="button">My Projects
					</a>
				</div>
		</div>
	</div>
	<!-- Bottom left corner controls (Theme controller doesnt work because a lot of stuff is hard coded) -->
	<!-- <div class="absolute bottom-0 left-0 p-4">
		<label class="swap swap-rotate">
			<input type="checkbox" class="theme-controller" value="emerald" />

			<svg
				class="swap-off h-10 w-10 fill-current"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
			>
				<path
					d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
				/>
			</svg>

			<svg
				class="swap-on h-10 w-10 fill-current"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
			>
				<path
					d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
				/>
			</svg>
		</label>
	</div> -->
</div>
<br />

<!-- About Me -->
<div class="flex justify-center items-center p-4">
	<div class="group flex flex-col md:flex-row gap-12 p-10 rounded-lg bg-secondary-content">
		<!--  bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent -->
		<h2 class="text-5xl font-bold text-secondary flex justify-center"><Icon class="opacity-0 group-hover:opacity-100 transition-all duration-700" icon="iconamoon:arrow-right-2-fill"></Icon>About Me</h2>
		<p class="max-w-md mb-5">
			My name is Leah, and I'm a self driven creative student studying CMGT. In my free time I will
			probably be working on personal projects, drawing, or other creative things. I do a lot of
			opensource work and love making people smile. I love working with people, trying new things,
			and being creative. My Desire to learn enables me to do various different projects. I am good
			at coding, modeling, and texturing among other things.
		</p>
	</div>
</div>

<!-- Skills -->
<div class="flex justify-center items-center p-4">
	<div class="group flex flex-col md:flex-row gap-12 p-10 rounded-lg bg-secondary-content">
		<!--  bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent -->
		<h2 class="text-5xl font-bold text-secondary flex justify-center"><Icon class="opacity-0 group-hover:opacity-100 transition-all duration-700" icon="iconamoon:arrow-right-2-fill"></Icon>Skills</h2>
		<div class="flex flex-col gap-2">
			<Skill name={'Programming'} level={100}>
				<p class="max-w-md">
					I have been programming for almost 10 years now. I have experience with a lot of languages
					including Java, C#, GDscript, Lua, HTML, and Javascript. I have worked with a lot of different
					libraries and frameworks including Svelte, Godot, and Unity.
				</p>
			</Skill>
			<Skill name={'Art'} level={70}>
				<p class="max-w-md">
					I have worked on many projects and am good at pixel art and hard surface modeling. I have
					experience with Blender, Photoshop, and Aseprite. I also can do some drawing and digital art.
				</p>
			</Skill>
			<Skill name={'UI Design'} level={70}>
				<p class="max-w-md">
					I have worked on a lot of projects and am good at making things look good. I have experience
					with mocking up UI designs in Figma, and implementing the designs for the web and also in Godot.
				</p>
			</Skill>
			<Skill name={'Level Design'} level={40}>
				<p class="max-w-md">
					I have worked on some projects and am able to think about balance and flow when designing levels.
				</p>
			</Skill>
			<div class="mockup-code">
				<div class="m-5">
					<h2>Software and languages I know</h2>
					<br />
					<ul class="flex flex-wrap gap-1 justify-center bg-base-200 rounded-lg p-2">
						<li class="tooltip" data-tip='Figma'><Icon icon="skill-icons:figma-dark" width={'2rem'} /></li>
						<li class="tooltip" data-tip='Blender'><Icon icon="skill-icons:blender-dark" width={'2rem'} /></li>
						<li class="tooltip" data-tip='Github'><Icon icon="skill-icons:github-dark" width={'2rem'} /></li>
						<li class="tooltip" data-tip='Obsidian'><Icon icon="skill-icons:obsidian-dark" width={'2rem'} /></li>
						<li class="tooltip" data-tip='Photoshop'><Icon icon="skill-icons:photoshop" width={'2rem'} /></li>
						<li class="tooltip" data-tip='Adobe Illustrator'><Icon icon="skill-icons:illustrator" width={'2rem'} /></li>
						<li class="tooltip" data-tip='VScode'><Icon icon="skill-icons:vscode-dark" width={'2rem'} /></li>
						<li class="tooltip" data-tip='Godot'><Icon icon="skill-icons:godot-dark" width={'2rem'} /></li>
						<li class="tooltip" data-tip='Unity'><Icon icon="skill-icons:unity-dark" width={'2rem'} /></li>
						<li class="tooltip" data-tip='Svelte'><Icon icon="skill-icons:svelte" width={'2rem'} /></li>
						<li class="tooltip" data-tip='Tailwind'><Icon icon="skill-icons:tailwind-dark" width={'2rem'} /></li>
						<li class="tooltip" data-tip='NPM'><Icon icon="skill-icons:npm-dark" width={'2rem'} /></li>
						<li class="tooltip" data-tip='NodeJS'><Icon icon="skill-icons:nodejs-dark" width={'2rem'} /></li>
						<li class="tooltip" data-tip='HTML'><Icon icon="skill-icons:html" width={'2rem'} /></li>
						<li class="tooltip" data-tip='Mongo DB'><Icon icon="skill-icons:mongodb" width={'2rem'} /></li>
						<li class="tooltip" data-tip='Lua'><Icon icon="skill-icons:lua-dark" width={'2rem'} /></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>

<div id="projects">
	
	<h2 class="text-5xl font-bold text-secondary text-center p-10">Projects</h2>
	<Projects></Projects>
</div>

<div class="w-full flex justify-center p-10">
	<div class="join">
		<a class="btn join-item" href="https://github.com/ChaoticLeah">Github</a>
		<a class="btn join-item" href="https://kevinwho.itch.io/">Itch.io</a>
		<!-- <a class="btn join-item" href="mailto:work@leahdevs.xyz">Email Me</a> -->
	</div>
</div>
<!-- <article class="prose prose-slate">{{ test }}</article> -->
