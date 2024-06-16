<script lang="ts">
	import Image from '$lib/components/Image.svelte';
	import Title from '$lib/components/Title.svelte';
</script>

<div class="w-screen !h-1/2 bg-red-500"></div>

<article class="prose lg:prose-xl lg:mx-40 m-8 p-4 rounded-xl !max-w-full bg-base-300">
	<!-- `	<h1>The Orbetorian</h1>
	<Image
		src="/ProjectThumbnails/TheOrbetorian.png"
		alt="A sceenshot of The Orbetorian in an underground cave in a glow tree biome"
	/>` -->
	<Title title="The Devils Dungeon" src="TheDevilsDungeon.png"></Title>
	<p>
		The Devils Dungeon is a project I made for the Devtober 2020 game jam. I learned to work under
		short time constraints. In the end I was able to ship a full grid based puzzle game.
	</p>

	
	<!-- <h2>Play it here</h2>
	<iframe
		frameborder="0"
		src="https://itch.io/embed-upload/2928345?color=000000"
		allowfullscreen=""
		width="1280"
		height="720"
		><a href="https://kevinwho.itch.io/the-devils-dungeon">Play The Devils Dungeon on itch.io</a
		></iframe
	> -->

	<h2>My Role & Things I did</h2>
	<ul>
		<li>Programmed a rendering system</li>
		<li>Programmed all the logic for the game</li>
		<li>Rapidly prototyped game mechanics and tested them</li>
		<li>Did the artwork for the game</li>
		<li>Made a level editor</li>
	</ul>

	<h2>Software Used</h2>
	<ul>
		<li>HTML</li>
		<li>Javascript</li>
		<li>Github</li>
		<li>Aseprite</li>
		<li>SFXR</li>
	</ul>

	<h2>Screenshots</h2>
	<Image
		src="/ProjectThumbnails/TheDevilsDungeon/gamejam.gif"
		alt="A gif of a prototype version of the game with just shapes"
	/>
	<Image
		src="/ProjectThumbnails/TheDevilsDungeon/yOcI99G2bu8AAAAASUVORK5CYII.png"
		alt="Later on with some textures here is an in progress screenshot of me making a level editor to make levels easily"
	/>
</article>

