<script>
	import ProjectCard from './components/ProjectCard.svelte';

	const TAGS = {
		GAME: 'Game',
		TOOL: 'Tool'
	};
</script>

<div class="flex justify-center items-center">
	<div class="w-10/12 flex flex-wrap gap-2">
		<ProjectCard
			title="The Orbetorian"
			desc={`A sandbox game where everything is procedurally generated. Its like terraria and no mans sky combined. I worked with a friend on this and handled a lot of the UI, some items, rendering, and other things.`}
			image={{
				name: 'TheOrbetorian.png',
				alt: 'A sceenshot of The Orbetorian in an underground cave in a glow tree biome'
			}}
			moreInfoURL="/projects/TheOrbetorian"
			tags={[TAGS.GAME]}
		></ProjectCard>

		<ProjectCard
			title="Desolate Dominion"
			desc={`A procedural sandbox survival game pushing robox to its limits. I worked on everything but I especially enjoyed working on algorithms for the terrain.`}
			image={{
				name: 'DesolateDominion.png',
				alt: 'Some procedurally generated snow mountains and a rocky grassy cliff with some trees below'
			}}
			moreInfoURL="/projects/DesolateDominion"
			tags={[TAGS.GAME]}
		></ProjectCard>
		<!-- 
		<ProjectCard
			title="Styled Youtube Captions"
			desc={`A in browser tool that allows you to make styled captions for youtube. This includes using different colors, fonts, shadows and more! This was a solo project.`}
			image={{
				name: 'StyledYoutubeCaptions.png',
				alt: 'A screenshot of the github readme showing the logo. The logo is pink and purple with a white outline.'
			}}
		></ProjectCard> -->

		<!-- <ProjectCard
			title="Pearl"
			desc={`An earlier attempt at a social media site. This one I made on my own from the ground up.`}
			image={{ name: 'Sharkey.png', alt: 'The cutiekey and sharkey interface' }}
		></ProjectCard> -->

		<!-- <ProjectCard
			title="Friendbot"
			desc={`A discord bot that acts as a proxy allowing people to talk to eachother and try new identities online without being scared. I worked on this alone and really enjoyed planning out the features.`}
			image={{ name: 'Sharkey.png', alt: 'The cutiekey and sharkey interface' }}
		></ProjectCard> -->

		<ProjectCard
			title="Bundle Art Generator"
			desc={`An online tool that allows you to paint whatever you want and copy a command that you can run in minecraft that will bring the art into your inventory. I really enjoyed combining games and tools for this one.`}
			image={{
				name: 'BundleArtGenerator.png',
				alt: 'A 2d grid of minecraft stained glass and some paint tools to paint a picture in it'
			}}
			tags={[TAGS.TOOL]}
		></ProjectCard>

		<ProjectCard
			title="The Devils Dungeon"
			desc={`An online puzzle game I made alone for the 2020 Devtober gamejam inspired by helltaker.`}
			image={{
				name: 'TheDevilsDungeon.png',
				alt: 'A 2D puzzle game with a pixel art robot escaping a maze'
			}}
			moreInfoURL="/projects/TheDevilsDungeon"
			tags={[TAGS.GAME]}
		></ProjectCard>

		<ProjectCard
			title="Aether Engine"
			desc={`This is my second attempt at a little game engine project that runs in the browser allowing you to made games for the browser. I worked on this project alone during covid as a passion project and made the whole thing on my own.`}
			image={{
				name: 'AetherEngine.png',
				alt: 'A sceenshot of the Aether Engine interface and a game running with a little robot standing on a platform'
			}}
			tags={[TAGS.TOOL]}
		></ProjectCard>

		<ProjectCard
			title="Sharkey & Cutiekey"
			desc={`Sharkey and Cutiekey and 2 fediverse projects I work on with a small team of other people. They are both opensource social media sites.
My role in this was frontend and backend coder.`}
			image={{ name: 'Sharkey.png', alt: 'The cutiekey and sharkey interface' }}
		></ProjectCard>

		<!-- <ProjectCard
			title="Image Tool"
			desc={`This self hosted open source tool allows you to sort images by tags. Think of it like jellyfin more for images. I am the owner of this project and have planned, coded, and done almost everything there so far.`}
			image={{ name: 'Sharkey.png', alt: 'The cutiekey and sharkey interface' }}
			tags={[TAGS.TOOL]}
		></ProjectCard> -->
	</div>
</div>
