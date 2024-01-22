import redis from "$lib/server/redis";
import { json } from "@sveltejs/kit";
import { compile } from "mdsvex";

function titleToSlug(title: string) {
	// OpenWRT Bridge ohne RelayD mit WDS
	// => openwrt-bridge-ohne-relayd-mit-wds
	return title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function hasFrontMatter(text: string) {
	return text.startsWith("---");
}

function getMDTitle(text: string) {
	const match = text.match(/^#\s+(.*)$/m);
	if(!match) {
		// Get first line instead
		const lines = text.split("\n");
		return lines[0].replace(/^#\s+/, "");
	}
	return match[1];
}

function isMD(text: string) {
	return text.includes("#");
}

function getFrontmatterAsJSON(text: string) {
	/*
	---
	title: OpenWRT Bridge ohne RelayD mit WDS
	date: 2021-08-08
	author: Jannik
	---

	# ...
	blah!
	blah blaj

	=> { title: "OpenWRT Bridge ohne RelayD mit WDS", date: "2021-08-08", author: "Jannik" } as an object
	*/
	const frontmatter = text.split("---")[1].trim();
	const lines = frontmatter.split("\n");
	const json: any = {};
	for(const line of lines) {
		const [key, value] = line.split(":").map((str) => str.trim());
		json[key] = value;
	}
	return json;
}

export async function POST({ request }: { request: Request }) {
	let { text, author } = await request.json();
	text = text.replace(/---\n[\s\S]*?\n---\n\n/, "");
	const title = getMDTitle(text);
	const frontmatter = `---
title: ${title}
date: ${new Date().toLocaleDateString("de-DE")}
author: ${author}
---

`;
	text = frontmatter + text;
	console.log(getFrontmatterAsJSON(text));
	const compiled = (await compile(text));
	if(!compiled) return json({ slug: "" });
	const slug = titleToSlug(title);
	redis.set(slug, JSON.stringify({ html: compiled.code, ...getFrontmatterAsJSON(text), md: text }));
	return json({ slug });
}
