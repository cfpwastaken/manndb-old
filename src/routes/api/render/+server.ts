import { json } from "@sveltejs/kit";
import { compile } from "mdsvex";

export async function POST({ request }: { request: Request }) {
	const { text } = await request.json();
	const compiled = (await compile(text))?.code;
	return json({ html: compiled });
}
