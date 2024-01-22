import redis from "$lib/server/redis.js"
import { error } from "@sveltejs/kit"

export async function load({ params }) {
	try {
		// const post = await import(`../../posts/${params.slug}.md`)
		
		// return {
		// 	content: post.default,
		// 	meta: post.metadata
		// }
		const post = await redis.get(params.slug)

		return {
			...JSON.parse(post),
			slug: params.slug
		}
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`)
	}
}
