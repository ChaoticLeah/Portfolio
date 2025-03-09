<script lang="ts">
	import Image from '$lib/components/Image.svelte';
	import Title from '$lib/components/Title.svelte';
</script>

<div class="w-screen !h-1/2 bg-red-500"></div>

<!-- <div class="hero min-h-screen" style="background-image: url(https://Image.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg);">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
        <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <button class="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div> -->
<article class="prose lg:prose-xl lg:mx-96 m-8 p-4 rounded-xl !max-w-full bg-base-300">
	<!-- `	<h1>The Orbetorian</h1>
	<Image
		src="/ProjectThumbnails/TheOrbetorian.png"
		alt="A sceenshot of The Orbetorian in an underground cave in a glow tree biome"
	/>` -->
	<Title
		title="The Orbetorian"
		src="TheOrbetorian.png"
	></Title>
	<p>
		The Orbetorian is a sandbox game where everything is procedurally generated. Its like terraria
		and no mans sky combined. This was a project that took around 1-2 years. I worked on this in
		Java with a friend.
	</p>

	<h2>My Role & Things I did</h2>
	<ul>
		<li>Made the UI and its framework</li>
		<li>Made a text renderer</li>
		<!-- <li>Adding Items (Rocket)</li> -->
		<li>Added Discord rich presence</li>
		<li>Bug fixes</li>
		<li>Keybinds</li>
		<li>Made the save file self fixing if corrupted</li>
		<li>Planet Pinning</li>
		<li>Made many of the particles in the game</li>
		<li>Fancy grass that reacts to the enviorment</li>
		<li>Quality of life inventory and mining/building features</li>
		<li>Debug tools and preformance monitoring</li>
		<li>Designed some sfx (Door open/close, and walking sound)</li>
		<li>Recipe book</li>
		<li>Auto updating</li>
		<li>Some textures</li>
	</ul>

	<h2>Software Used</h2>
	<ul>
		<li>Java</li>
		<li>Github</li>
		<li>Aseprite</li>
		<li>Audacity (For sound mixing)</li>
	</ul>

	<h2>Unique challanges</h2>
	<p>
		This project was made in a custom game engine so we had to make everything ourselves. Also when
		doing textures we had to do most things in black and white since color was added at runtime
		based on the materials it was made out of.
	</p>

  <h2>Screenshots</h2>
  <Image src="/ProjectThumbnails/TheOrbetorian/Screen_Shot_2020-10-09_at_8.03.35_PM.png" alt="A 2d pixel art game where the player is in the middle standing in a house structure"/>
  <Image src="/ProjectThumbnails/TheOrbetorian/Screen_Shot_2020-12-25_at_6.33.11_PM.png" alt="A 2d pixel art game where the player on the side of a mountain next to an open cave"/>
</article>
