import type { Post, TagInfo } from "$lib/types"

export async function load({ fetch, params }) {
	const posts: Post[] = await fetch("/api/posts").then(res => res.json())
	const tagInfo: TagInfo = await fetch(`/api/tags/${params.cat}`).then(res => res.json())
	return { posts, tagInfo, params }
}
