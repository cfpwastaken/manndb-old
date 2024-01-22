<script>
	import PostPreview from '$lib/components/PostPreview.svelte';
    import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';

	/** @type {import('./$types').PageData} */
	export let data;

	let searchQuery = "";

	onMount(() => {
		document.querySelector("input")?.focus();
	});
</script>

<!-- SEO -->
<svelte:head>
	<title>Search</title>
</svelte:head>

<article>
	<div class="info">
		<h1>Search</h1>
		<input type="text" placeholder="Type something..." bind:value={searchQuery} style="width: 30%;">
	</div>

	<div class={`posts ${data.posts.filter(a => a.title.toLowerCase().includes(searchQuery.toLowerCase())).length == 1 ? "center" : ""}`}>
		{#each data.posts as post}
			{#if post.title.toLowerCase().includes(searchQuery.toLowerCase())}
				<div transition:scale={{ duration: 200 }}>
					<PostPreview post={post} />
				</div>
			{/if}
		{/each}
	</div>
</article>

<style>
	.info {
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.info h1 {
		font-size: 3rem;
		margin: 5px;
		text-align: center;
	}

	.posts {
		display: flex;
		margin: 15px;
		gap: 15px;
		flex-wrap: wrap;
		view-transition-name: posts;
	}
	
	.posts.center {
		justify-content: center;
	}
</style>