import type { Post } from "$lib/types"

export async function load({ fetch }) {
	const posts: Post[] = await fetch("api/posts").then(res => res.json())
	return { posts }
}
