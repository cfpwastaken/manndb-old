<script lang="ts">
	import type { Post } from "$lib/types";
	import Chip from "./Chip.svelte";

	export let post: Post;
	export let large = false;

	let clicked = false;
</script>

<div class={"post " + (clicked ? "transition " : "") + (large ? "large" : "")}>
	<a href="/{post.slug}" on:click={() => {
		clicked = true;
	}}>
		<h2>{post.title}</h2>
	</a>
	<!-- <div class="categories">
		{#each post.categories as cat}
			<Chip>
				<a href="/category/{cat}">{cat}</a>
			</Chip>
		{/each}
	</div> -->
	<span class="info">
		{post.date}
		<!-- todo reading time -->
		&middot;
		{post.author}
	</span>
</div>

<style>
	.post {
		background-color: #1d1d1d;
		display: flex;
		padding: 20px;
		flex-direction: column;
		gap: 5px;
		border-radius: 15px;
	}

	h2 {
		margin: 0;
	}

	a {
		color: white;
	}

	.info {
		color: #acacac;
		font-size: 1rem;
	}

	.categories {
		display: flex;
		gap: 5px;
	}

	.transition h2 {
		view-transition-name: title;
	}

	.transition .desc {
		view-transition-name: description;
	}

	.transition .categories {
		view-transition-name: categories;
	}

	.post:not(.large) {
		max-width: 400px;
	}

	.post.large {
		width: fit-content;
	}
</style>