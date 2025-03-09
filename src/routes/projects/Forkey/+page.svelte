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
		title="Forkey"
		src="Sharkey.png"
	></Title>
	<p>
		Forkey is a project based on Misskey.io which has many accessability, moderation, and other improvements. It was created
        based on what I learned from Sharkey. Sharkey is based on Misskey which has its own issues and isnt as well tested especially
        for big instances. That is why we chose Misskey.io to base it off of since its running one of the biggest misskey instances.
        <br>
        <br>
        Forkey takes a lot of the improvements I did on Sharkey and also implements some of its own features for instance customization,
        digital wellbeing, and more.
	</p>

	<h2>My Role & Things I did</h2>
    <ul>
        <li>
            <strong>All the Main Features You Love from Other Forks</strong>
            <ul>
                <li>Account registration approval</li>
                <li>Notification dot in favicon</li>
                <li>Firefish mfm</li>
                <li>Friendly CAPTCHA</li>
                <li>Number lines in code blocks</li>
                <li>Splitting isCat and cat speak</li>
                <li>ListenBrainz integration</li>
                <li>Wildcard antennas</li>
                <li>Mute, blocked, and other profile badges</li>
                <li>Pickable MFM search engine</li>
                <li>Force poll refreshing</li>
            </ul>
        </li>
        
        <li>
            <strong>Accessibility Features</strong>
            <ul>
                <li>Warning when you forget to add alt text to a post</li>
                <li>Search drive by alt text</li>
                <li>Incoming media under a CW can now be marked as sensitive automatically</li>
                <li>Digital wellbeing features, including the ability to hide follower, following, or note count stats</li>
                <li>Fixed blocks</li>
                <li>Posts per day for users shown</li>
                <li>More mobile-friendly UI</li>
                <li>Ability to reorder poll options</li>
            </ul>
        </li>
        
        <li>
            <strong>Better Onboarding</strong>
            <ul>
                <li>Enhanced onboarding experience for new users</li>
            </ul>
        </li>
        
        <li>
            <strong>More Customization</strong>
            <ul>
                <li>
                    Instance customization:
                    <ul>
                        <li>Donate to instance button</li>
                        <li>Custom email templates for all outgoing emails</li>
                    </ul>
                </li>
            </ul>
        </li>
        
        <li>
            <strong>Better Moderation Tools &amp; Performance</strong>
            <ul>
                <li>Moved delete under post dropdown to an admin submenu to avoid accidental deletions</li>
                <li>Allow admins to force a user CW</li>
            </ul>
        </li>
        
        <li>
            <strong>Additional Improvements</strong>
            <ul>
                <li>Ability to hide home posts from RSS feeds and profile JSON</li>
            </ul>
        </li>
    </ul>

	<h2>Software Used</h2>
	<ul>
		<li>Vue</li>
        <li>Typescript</li>
		<li>Redis</li>
		<li>Postgres</li>

	</ul>

	<h2>Unique challanges</h2>
	<p>
		This project is based off of an already existing big project that I had to learn the ins and outs of to implement many features.
        I also had to learn a new framework for this (Vue).
	</p>

    <a href="https://fork.ke">The project link</a>

  <!-- <h2>Screenshots</h2>
  <Image src="/ProjectThumbnails/TheOrbetorian/Screen_Shot_2020-10-09_at_8.03.35_PM.png" alt="A 2d pixel art game where the player is in the middle standing in a house structure"/>
  <Image src="/ProjectThumbnails/TheOrbetorian/Screen_Shot_2020-12-25_at_6.33.11_PM.png" alt="A 2d pixel art game where the player on the side of a mountain next to an open cave"/> -->
</article>
