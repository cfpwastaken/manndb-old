<script>
	import PostPreview from '$lib/components/PostPreview.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.params.cat}</title>
</svelte:head>

<article>
	<div class="info">
		<h1>{data.params.cat}</h1>
		<p>{data.tagInfo.description}</p>
	</div>

	<div class="posts">
		{#each data.posts as post}
			{#if post.categories.includes(data.params.cat)}
				<PostPreview {post} />
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

	.info p {
		font-size: 1.5rem;
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
</style>