import { json } from "@sveltejs/kit";
import type { Post } from "$lib/types";
import redis from "$lib/server/redis";

function reshapeDate(date: string) {
	return date.split(".").reverse().join("-");
}

// async function getPosts() {
// 	let posts = [];

// 	const paths = import.meta.glob("/src/posts/*.md", { eager: true });

// 	for(const path in paths) {
// 		const file = paths[path];
// 		const slug = path.split("/").at(-1)?.replace(".md", "");

// 		if(file && typeof file === "object" && "metadata" in file && slug) {
// 			const metadata = file.metadata as Omit<Post, "slug">;
// 			const post = { ...metadata, slug } satisfies Post;
// 			posts.push(post);
// 		}
// 	}

// 	posts = posts.sort((first, second) =>
//     new Date(reshapeDate(second.date)).getTime() - new Date(reshapeDate(first.date)).getTime()
// 	);

// 	return posts;
// }

async function getPosts() {
	let posts = [];
	const keys = await redis.keys("*");
	for(const key of keys) {
		const post = await redis.get(key);
		if(post) posts.push({ ...JSON.parse(post), slug: key });
	}

	posts = posts.sort((first, second) =>
		new Date(reshapeDate(second.date)).getTime() - new Date(reshapeDate(first.date)).getTime()
	);

	return posts;
}

export async function GET() {
	const posts = await getPosts();
	return json(posts);
}
