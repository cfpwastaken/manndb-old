<script>
	import { page } from "$app/stores";
</script>

<div class="main">
	<h1>Error {$page.status}</h1>
	<h2>{$page.error?.message}</h2>
</div>

<style>
	.main {
		display: flex;
		flex-direction: column;
		height: 100%;
		align-items: center;
		justify-content: center;
	}

	h1, h2 {
		margin: 5px;
	}

	h1 {
		font-size: 4rem;
	}
</style>