<script lang="ts">
	import Title from '$lib/components/Title.svelte';
</script>

<div class="w-screen !h-1/2 bg-red-500"></div>

<article class="prose lg:prose-xl lg:mx-40 m-8 p-4 rounded-xl !max-w-full bg-base-300">
	<!-- `	<h1>The Orbetorian</h1>
	<img
		src="/ProjectThumbnails/TheOrbetorian.png"
		alt="A sceenshot of The Orbetorian in an underground cave in a glow tree biome"
	/>` -->
	<Title title="Desolate Dominion" src="DesolateDominion.png"></Title>
	<p>
		Desolate Dominion is a game I made on Roblox to learn more about procedural terrain generation.
		Throughout this whole process I had a lot of fun coming up with ways to generate intresting and
		accurate terrain, and weather all on very limited server processing power in lua.
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
		<li>
			Programmed a procedural terrain system allowing for biomes, objects, and more based on things
			like heat maps, errosion maps, and more!
		</li>
		<li>Programmed a custom anticheat</li>
		<li>Did the artwork and modeling for the game</li>
		<li>Programmed a dynamic weather system</li>
		<li>Programmed a chunk system</li>
		<li>Programmed a building and mining system.</li>
		<li>Made the terrain system simple and extendable.</li>
	</ul>

	<h2>Software Used</h2>
	<ul>
		<li>Lua</li>
		<li>Roblox</li>
		<li>Rojo & Aftman</li>
	</ul>

	<h2>Screenshots</h2>
	<img
		src="/ProjectThumbnails/DesolateDominion/DDCaves.png"
		alt="A screenshot showing an x-ray of the world showing all the caves"
	/>
	<p>A screenshot showing an x-ray of the world showing all the caves</p>
	<img
		src="/ProjectThumbnails/DesolateDominion/DDBirchTreeBlender.png"
		alt="A low poly birch tree in blender"
	/>
	<p>A low poly birch tree in blender</p>

    <img src="/ProjectThumbnails/DesolateDominion/DDPalmTreeBlender.png" alt="The palm tree model in blender" />
	<p>The palm tree model in blender</p>

	<img
		src="/ProjectThumbnails/DesolateDominion/DDModel.png"
		alt="A model of the mining tool in blender"
	/>
	<p>A model of the mining tool in blender</p>
	<img
		src="/ProjectThumbnails/DesolateDominion/DDDebugging.png"
		alt="A debug graph showing slow load times on my terrain system"
	/>
	<p>A debug graph showing slow load times on my terrain system</p>
	<img
		src="/ProjectThumbnails/DesolateDominion/DDEarlierRain.png"
		alt="The old version of the game using temparary UI showing the weather systems rain"
	/>
	<p>The old version of the game using temparary UI showing the weather systems rain</p>

    <img src="/ProjectThumbnails/DesolateDominion/DDWeatherGraph.png" alt="A graph to debug the current weather" />
	<p>A graph to debug the current weather</p>

	<img
		src="/ProjectThumbnails/DesolateDominion/DDMining.png"
		alt="A laser coming from the players mining tool and smoke particles coming from the ground thats being mined"
	/>
	<p>
		A laser coming from the players mining tool and smoke particles coming from the ground thats
		being mined
	</p>

	<img src="/ProjectThumbnails/DesolateDominion/DDNight.png" alt="Night time in the game" />
	<p>Night time in the game</p>

    <img src="/ProjectThumbnails/DesolateDominion/DDOpenClose.gif" alt="The underwater plant in the game opening and closing releasing trapped air bubbles in it" />
	<p>The underwater plant in the game opening and closing releasing trapped air bubbles in it</p>

    <img src="/ProjectThumbnails/DesolateDominion/DDPlantBlender.png" alt="The underwater plant model flat in blender" />
	<p>The underwater plant model flat in blender</p>

    <img src="/ProjectThumbnails/DesolateDominion/DDStoneBiome.png" alt="Some small hills" />
	<p>Some small hills</p>

    <img src="/ProjectThumbnails/DesolateDominion/OldDDBridge.png" alt="A bridge someone built in the old version of the game" />
	<p>A bridge someone built in the old version of the game</p>

    <img src="/ProjectThumbnails/DesolateDominion/RobloxScreenShot20230626_141151897.png" alt="Looking out of a cave" />
	<p>Looking out of a cave</p>
    
</article>

<style>
	/* article {
  } */
	article > img {
		border-radius: 10px;
	}
</style>
