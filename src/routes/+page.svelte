<script>
	import { description, title } from "$lib/config";
	import PostPreview from "../lib/components/PostPreview.svelte";

	export let data;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<div class="main">
	<h1>{title}</h1>
	<p>{description}</p>

	<div class="posts">
		{#each data.posts as post}
			<PostPreview post={post} />
		{/each}
	</div>
</div>

<style>
	h1, p {
		margin: 10px;
		text-align: center;
	}

	.posts {
		display: flex;
		margin: 15px;
		gap: 15px;
		flex-wrap: wrap;
		view-transition-name: posts;
	}
</style>